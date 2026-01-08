import { Comentarios } from "../../../domain/entities/Comentarios";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";
import { CrearComentarioInput } from "./CrearComentarioInput";

export class CUCrearComentario {
  constructor(private comentarioRepository: IComentariosRepository) {}
  async execute(
    data: CrearComentarioInput,
    id_proyecto: number,
    id_usuario: number
  ): Promise<Comentarios> {
    const comentario = new Comentarios(
      null,
      id_proyecto,
      id_usuario,
      data.contenido,
      new Date(),
      true
    );

    return await this.comentarioRepository.create(comentario);
  }
}
