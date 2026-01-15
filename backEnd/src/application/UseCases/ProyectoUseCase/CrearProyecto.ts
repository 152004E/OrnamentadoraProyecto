import { Proyecto } from "../../../domain/entities/Proyecto";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { CrearProyectoInput } from "./CrearProyectoInput";

export class CUCrearProyecto {
  constructor(private proyectoRepository: IProyectoRepository) {}

  async execute(
    data: CrearProyectoInput,
    id_usuario: number
  ): Promise<Proyecto> {
    //crear una entidad con los datos



    const proyecto = new Proyecto(
      null, // este campo lo pone el sistema
      id_usuario,
      data.nombre_proyecto,
      data.descripcion,
      new Date(),
      data.fecha_entrega,
      true
    );

    
    return await this.proyectoRepository.crear(proyecto);
  }
}
