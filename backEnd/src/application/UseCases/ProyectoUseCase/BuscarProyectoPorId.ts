import { Proyecto } from "../../../domain/entities/Proyecto";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";

export class CUBuscarProyectoPorId {
  constructor (private proyectoRepository : IProyectoRepository){}
  async execute(id: number): Promise<Proyecto> {
    const proyecto = await this.proyectoRepository.buscarPorId(id);

    if (!proyecto) {
      throw new Error("Proyecto no encontrado");
    }
    return proyecto;
  }
}
