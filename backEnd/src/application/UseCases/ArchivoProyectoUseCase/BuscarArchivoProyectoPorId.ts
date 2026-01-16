import { Archivo_Proyecto } from "../../../domain/entities/Archivo_Proyecto";
import { IArchivo_ProyectoRepository } from "../../../domain/interfaces/IArchivo_ProyectoRepository";

export class CUBuscarArchivoProyectoPorId {
  constructor(private archivoRepository: IArchivo_ProyectoRepository) {}
  async execute(id_archivo: number): Promise<Archivo_Proyecto> {
    const archivo = await this.archivoRepository.findById(id_archivo);

    if (!archivo) {
      throw new Error("Archivo no encontrado");
    }
    return archivo
  }
}
