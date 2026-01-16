import { Archivo_Proyecto } from "../../domain/entities/Archivo_Proyecto";
import { IArchivo_ProyectoRepository } from "../../domain/interfaces/IArchivo_ProyectoRepository";
import { ArchivoCotenido } from "../../domain/valueObjects/ArchivoContenido";
import { TipoArchivo } from "../../domain/valueObjects/TipoArchivo";
import { pool } from "../database/postgres";

export class Archivo_ProyectoRepository implements IArchivo_ProyectoRepository {
  async create(archivo_proyecto: Archivo_Proyecto): Promise<Archivo_Proyecto> {
    const { rows } = await pool.query(
      `
         INSERT INTO archivos_proyecto (
        id_proyecto,
        id_usuario,
        url_archivo,
        mime_type,
        size,
        tipo_archivo
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
        `,
      [
        archivo_proyecto.id_proyecto,
        archivo_proyecto.id_usuario,
        archivo_proyecto.contenido.url,
        archivo_proyecto.contenido.mimeType,
        archivo_proyecto.contenido.size,
        archivo_proyecto.tipo_archivo.value,
      ]
    );

    const row = rows[0];

    return new Archivo_Proyecto(
      row.id_archivo,
      row.id_proyecto,
      row.id_usuario,
      ArchivoCotenido.crear(row.url_archivo, row.mime_type, row.size),
      TipoArchivo.fromString(row.tipo_archivo),
      row.fecha_subida
    );
  }
  async findById(id_archivo: number): Promise<Archivo_Proyecto | null> {
    const { rows } = await pool.query(
      `
    SELECT * FROM archivos_proyecto
    WHERE id_archivo = $1
    `,
      [id_archivo]
    );

    if (rows.length === 0) return null;

    const row = rows[0];
    return new Archivo_Proyecto(
      row.id_archivo,
      row.id_proyecto,
      row.id_usuario,
      ArchivoCotenido.crear(row.url_archivo, row.mime_type, row.size),
      TipoArchivo.fromString(row.tipo_archivo),
      row.fecha_subida
    );
  }
  async findByProyecto(id_proyecto: number): Promise<Archivo_Proyecto[]> {
    const { rows } = await pool.query(
      `
    SELECT * FROM archivos_proyecto
    WHERE id_proyecto = $1
    ORDER BY fecha_subida DESC
    `,
      [id_proyecto]
    );

    return rows.map(
      (row) =>
        new Archivo_Proyecto(
          row.id_archivo,
          row.id_proyecto,
          row.id_usuario,
          ArchivoCotenido.crear(row.url_archivo, row.mime_type, row.size),
          TipoArchivo.fromString(row.tipo_archivo),
          row.fecha_subida
        )
    );
  }
  async delete(id_archivo: number): Promise<void> {
    await pool.query(
      `
    DELETE FROM archivos_proyecto
    WHERE id_archivo = $1
    `,
      [id_archivo]
    );
  }
}

export const archivo_ProyectoRepository = new Archivo_ProyectoRepository();
