import { Archivo_Proyecto  } from "../entities/Archivo_Proyecto";

export interface IArchivo_ProyectoRepository {
    create(archivo_proyecto: Archivo_Proyecto): Promise<Archivo_Proyecto>;
    findById(id_archivo: number): Promise<Archivo_Proyecto | null>;
    findByProyecto(id_proyecto: number): Promise<Archivo_Proyecto[]>;
    delete(id_archivo: number): Promise<void>;
}