import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";

export class CUEliminarProyecto {
  constructor(private proyectoRepository: IProyectoRepository) {}

  async execute(id: number): Promise<void> {
    const proyecto = await this.proyectoRepository.buscarPorId(id);
    if (!proyecto) {
      throw new Error("Proyecto no encontrado");
    }

    await this.proyectoRepository.eliminar(id);
  }
}
