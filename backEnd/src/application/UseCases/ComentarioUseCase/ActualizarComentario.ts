import { Comentarios } from "../../../domain/entities/Comentarios";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";
import { ActualizarComentarioInput } from "./ActualizarComentarioInput";

export class CUActualizarComentario {
  constructor(private comentarioRepository: IComentariosRepository) {}
  async execute(
    id_comentario: number,
    data: ActualizarComentarioInput,
    id_usuario: number
  ): Promise<Comentarios> {
    const comentario = await this.comentarioRepository.findById(id_comentario);
    if (!comentario) {
      throw new Error("Comentario no encontrado");
    }

    if (!comentario.estado) {
      throw new Error("Comentario eliminado");
    }

    if (comentario.id_usuario !== id_usuario) {
      throw new Error("No puedes editar este comentario");
    }
    if (!data.contenido || !data.contenido.trim()) {
      throw new Error("El contenido no puede estar vacío");
    }

    return this.comentarioRepository.actualizarComentario(
      id_comentario,
      data.contenido
    );
  }
}
