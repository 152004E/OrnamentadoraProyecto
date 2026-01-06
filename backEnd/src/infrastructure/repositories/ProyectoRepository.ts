import { Proyecto } from "../../domain/entities/Proyecto";
import { IProyectoRepository } from "../../domain/interfaces/IProyectoRepository";
import { pool } from "../database/postgres";

export class ProyectoRepository implements IProyectoRepository {
  async crear(proyecto: Proyecto): Promise<Proyecto> {
    const query = `INSERT INTO proyectos (id_usuario, nombre_proyecto, descripcion, fecha_creacion, fecha_entrega, estado) VALUES  ($1,$2,$3,$4,$5,$6) RETURNING *`;
    const value = [
      proyecto.id_usuario,
      proyecto.nombre_proyecto,
      proyecto.descripcion,
      proyecto.fecha_creacion,
      proyecto.fecha_entrega,
      proyecto.estado,
    ];

    const { rows } = await pool.query(query, value);

    return this.mapToEntity(rows[0]);
  }
  async listar(): Promise<Proyecto[]> {
    const { rows } = await pool.query(`  SELECT * FROM   proyectos`);
    return rows.map(this.mapToEntity);
  }
  async buscarPorId(id: number): Promise<Proyecto | null> {
    const { rows } = await pool.query(
      `SELECT * FROM proyectos WHERE id_proyecto = $1 `,
      [id]
    );
    if (rows.length === 0) return null;
    return this.mapToEntity(rows[0]);
  }

  async actualizar(id: number, data: Partial<Proyecto>): Promise<Proyecto> {
    const query = `
      UPDATE proyectos SET
        nombre_proyecto = $1,
        descripcion = $2,
        fecha_entrega = $3,
        estado = $4
      WHERE id_proyecto = $5
      RETURNING *;
    `;

    const values = [
      data.nombre_proyecto,
      data.descripcion,
      data.fecha_entrega,
      data.estado,
      id,
    ];

    const { rows } = await pool.query(query, values);
    if (rows.length === 0) {
      throw new Error("Proyecto no encontrado");
    }
    return this.mapToEntity(rows[0]);
  }

  async eliminar(id: number): Promise<void> {
    const resultado = await pool.query(
      `DELETE FROM proyectos WHERE id_proyecto = $1`,
      [id]
    );

    if (resultado.rowCount === 0) {
      throw new Error("Proyecto no encontrado");
    }
  }

  private mapToEntity = (row: any): Proyecto => {
    return new Proyecto(
      row.id_proyecto,
      row.id_usuario,
      row.nombre_proyecto,
      row.descripcion,
      row.fecha_creacion,
      row.fecha_entrega,
      row.estado
    );
  };
}

export const proyectoRepository = new ProyectoRepository();
