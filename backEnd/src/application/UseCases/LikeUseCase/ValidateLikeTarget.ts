import { LikeTarget } from "../../../domain/valueObjects/LikeTarget";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class ValidateLikeTarget {
  constructor(
    private proyectoRepository: IProyectoRepository,
    private comentarioRepository: IComentariosRepository
  ) {}

  async execute(target: LikeTarget): Promise<void> {
    if (target.tipo === "PROYECTO") {
      const proyecto = await this.proyectoRepository.buscarPorId(target.id);
      if (!proyecto) {
        throw new Error("Proyecto no encontrado");
      }
    }

    if (target.tipo === "COMENTARIOS") {
      const comentario = await this.comentarioRepository.findById(target.id);
      if (!comentario) {
        throw new Error("Comentario no encontrado");
      }
    }
  }
}
