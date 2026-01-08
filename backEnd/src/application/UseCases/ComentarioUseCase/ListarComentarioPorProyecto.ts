import { Comentarios } from "../../../domain/entities/Comentarios";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class CUListarComentarioPorProyecto {
  constructor(private comentarioRepository: IComentariosRepository) {}

  async execute(id_proyecto: number): Promise<Comentarios[]> {
    return this.comentarioRepository.findByProyecto(id_proyecto);
  }
}
