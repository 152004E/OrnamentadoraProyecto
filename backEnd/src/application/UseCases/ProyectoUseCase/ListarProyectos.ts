import { Proyecto } from "../../../domain/entities/Proyecto";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";

export class CUListarProyectos {
  constructor(private proyectoRepository: IProyectoRepository) {}

  async execute(): Promise<Proyecto[]> {
    return this.proyectoRepository.listar();
  }
}
