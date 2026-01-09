import { Comentarios } from "../../../domain/entities/Comentarios";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class CUBuscarComentarioPorId {
  constructor(private comentarioRepository: IComentariosRepository) {}

  async execute(id_comentario: number): Promise<Comentarios> {
    const comentario = await this.comentarioRepository.findById(id_comentario);

    if (!comentario) {
      throw new Error("Comentario no existe");
    }
    return comentario;
  }
}
