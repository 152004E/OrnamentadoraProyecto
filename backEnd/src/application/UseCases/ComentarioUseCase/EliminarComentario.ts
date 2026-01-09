import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class CUEliminarComentario {
  constructor(private comentarioRepository: IComentariosRepository) {}
  async execute(id_comentario: number, id_usuario: number): Promise<void> {
    const comentario = await this.comentarioRepository.findById(id_comentario);

    if (!comentario) {
      throw new Error("Comentario no encontrado");
    }

    if (comentario.id_usuario !== id_usuario) {
      throw new Error("No tienes permiso para eliminar este comentario");
    }

    await this.comentarioRepository.delete(id_comentario);
  }
}