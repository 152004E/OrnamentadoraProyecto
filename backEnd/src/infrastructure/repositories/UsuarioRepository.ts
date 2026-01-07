import { ActualizarUsuarioInput } from "../../application/UseCases/UsuarioUseCase/ActualizarUsuarioInput";
import { Usuario } from "../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
import { Email } from "../../domain/valueObjects/Email";
import { Password } from "../../domain/valueObjects/Password";
import { Rol } from "../../domain/valueObjects/Rol";
import { Telefono } from "../../domain/valueObjects/Telefono";
import { pool } from "../database/postgres";

export class UsuarioRepository implements IUsuarioRepository {
  async crear(usuario: Usuario): Promise<Usuario> {
    const query = `
      INSERT INTO usuarios 
      (nombre, correo, contraseña, telefono, direccion, rol, estado)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const values = [
      usuario.nombre,
      usuario.correo.getValue(),
      usuario.contraseña.getValue(),
      usuario.telefono.getValue(),
      usuario.direccion,
      usuario.rol.getValue(),
      usuario.estado,
    ];
    const { rows } = await pool.query(query, values);

    return this.mapToEntity(rows[0]);
  }
  async listar(): Promise<Usuario[]> {
    const { rows } = await pool.query(`SELECT * FROM usuarios`);
    return rows.map(this.mapToEntity);
  }

  async buscarPorId(id: number): Promise<Usuario | null> {
    const { rows } = await pool.query(
      `SELECT * FROM usuarios WHERE id_usuario = $1`,
      [id]
    );

    if (rows.length === 0) return null;
    return this.mapToEntity(rows[0]);
  }

  async buscarPorEmail(correo: string): Promise<Usuario | null> {
    const { rows } = await pool.query(
      `SELECT * FROM usuarios WHERE correo = $1`,
      [correo]
    );

    if (rows.length === 0) return null;
    return this.mapToEntity(rows[0]);
  }
  async actualizar(id: number, usuario: Usuario): Promise<Usuario> {
    const query = `
    UPDATE usuarios SET
      nombre = $1,
      correo = $2,
      contraseña = $3,
      telefono = $4,
      direccion = $5,
      rol = $6,
      estado = $7
    WHERE id_usuario = $8
    RETURNING *;
  `;

    const values = [
      usuario.nombre,
      usuario.correo.getValue(),
      usuario.contraseña.getValue(), // 🔥 hash correcto
      usuario.telefono.getValue(),
      usuario.direccion,
      usuario.rol.getValue(),
      usuario.estado,
      id,
    ];

    const { rows } = await pool.query(query, values);
    return this.mapToEntity(rows[0]);
  }

  async eliminar(id: number): Promise<void> {
    const resultado = await pool.query(
      `DELETE FROM usuarios WHERE id_usuario = $1`,
      [id]
    );
    if (resultado.rowCount === 0) {
      throw new Error("Usuario no encontrado");
    }
  }
  // esto es una simulacion en memoria como si fuera una base de datos

  private mapToEntity = (row: any): Usuario => {
    return new Usuario(
      row.id_usuario,
      row.nombre,
      new Email(row.correo),
      Password.fromHash(row.contraseña),
      new Telefono(row.telefono),
      row.direccion,
      row.fecha_creacion_cuenta,
      new Rol(row.rol),
      row.estado
    );
  };
}

export const usuarioRepository = new UsuarioRepository();
