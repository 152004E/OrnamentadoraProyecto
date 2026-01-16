import { IArchivo_ProyectoRepository } from "../../../domain/interfaces/IArchivo_ProyectoRepository";

export class CUEliminarArchivoProyecto {
  constructor(private archivoRepository: IArchivo_ProyectoRepository) {}

  async execute(id_archivo: number, id_usuario: number): Promise<void> {
    const archivo = await this.archivoRepository.findById(id_archivo);
    if (!archivo) {
      throw new Error("Archivo no encontrado");
    }
    if (archivo.id_usuario !== id_usuario) {
      throw new Error("No tienes permiso para eliminar este archivo");
    }
    await this.archivoRepository.delete(id_archivo);
  }
}
