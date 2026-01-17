import { Archivo_Proyecto } from "../../../domain/entities/Archivo_Proyecto";
import { IArchivo_ProyectoRepository } from "../../../domain/interfaces/IArchivo_ProyectoRepository";

export class CUListarArchivosPorProyecto {
  constructor(private archivosRepository: IArchivo_ProyectoRepository) {}
  async execute(id_proyecto: number): Promise<Archivo_Proyecto[]> {
    const archivos = await this.archivosRepository.findByProyecto(id_proyecto);
    if (!archivos || archivos.length === 0) {
      throw new Error("No hay archivos para este proyecto");
    }
    return archivos;
  }
}
