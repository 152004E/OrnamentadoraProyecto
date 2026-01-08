import { Proyecto } from "../../../domain/entities/Proyecto";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { ActualizarProyectoInput } from "./ActualizarProyectoInput"

export class CUActualizarProyecto {
  constructor(private proyectoRepository: IProyectoRepository) {}

  async execute(id: number, data: ActualizarProyectoInput): Promise<Proyecto> {
    const proyectoExiste = await this.proyectoRepository.buscarPorId(id);


    if (!proyectoExiste) {
      throw new Error("Proyecto no encontrado");
    }

    return this.proyectoRepository.actualizar(id, data);
  }
}
