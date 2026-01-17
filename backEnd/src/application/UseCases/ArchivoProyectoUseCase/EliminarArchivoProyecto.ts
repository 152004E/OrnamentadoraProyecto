import { IArchivo_ProyectoRepository } from "../../../domain/interfaces/IArchivo_ProyectoRepository";

export class CUEliminarArchivoProyecto {
  constructor(private archivoRepository: IArchivo_ProyectoRepository) {}

  async execute(id_archivo: number): Promise<void> {
    const archivo = await this.archivoRepository.findById(id_archivo);
    if (!archivo) {
      throw new Error("Archivo no encontrado");
    }
    await this.archivoRepository.delete(id_archivo);
  }
}
