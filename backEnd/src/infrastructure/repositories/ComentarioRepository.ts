import { Comentarios } from "../../domain/entities/Comentarios";
import { IComentariosRepository } from "../../domain/interfaces/IComentariosRepository";
import { pool } from "../database/postgres";

export class ComentarioRepository implements IComentariosRepository {
  async create(comentario: Comentarios): Promise<Comentarios> {
    const query = `INSERT INTO comentarios (id_proyecto, id_usuario, contenido,fecha_comentario, estado)   VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const values = [
      comentario.id_proyecto,
      comentario.id_usuario,
      comentario.contenido,
      comentario.fecha_comentario,
      comentario.estado,
    ];

    const { rows } = await pool.query(query, values);
    return this.mapToEntity(rows[0]);
  }
  async findById(id_comentario: number): Promise<Comentarios | null> {
    throw new Error("Method not implemented.");
  }
  async findByProyecto(id_proyecto: number): Promise<Comentarios[]> {
    const query = `  SELECT * 
    FROM comentarios
    WHERE id_proyecto = $1
      AND estado = true
    ORDER BY fecha_comentario ASC;`;

    const { rows } = await pool.query(query, [id_proyecto]);

    return rows.map(this.mapToEntity);
  }
  async findByFechaComentario(fecha_comentario: Date): Promise<Comentarios[]> {
    throw new Error("Method not implemented.");
  }
  async actualizarComentario(
    id_comentario: number,
    contenido: string
  ): Promise<Comentarios> {
    throw new Error("Method not implemented.");
  }
  async delete(id_comentario: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private mapToEntity = (row: any): Comentarios => {
    return new Comentarios(
      row.id_comentario,
      row.id_proyecto,
      row.id_usuario,
      row.contenido,
      row.fecha_comentario,
      row.estado
    );
  };
}

export const comentarioRepository = new ComentarioRepository();
