import { Likes } from "../../../domain/entities/likes";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";
import { ILikesRepository } from "../../../domain/interfaces/ILikesRepository";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { LikeTarget } from "../../../domain/valueObjects/LikeTarget";

export class CUToggleLike {
  constructor(
    private likeRepository: ILikesRepository,
    private proyectoRepository: IProyectoRepository,
    private comentarioRepository: IComentariosRepository
  ) {}
  async execute(
    id_usuario: number,
    target: LikeTarget
  ): Promise<{ liked: boolean }> {
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

    const existe = await this.likeRepository.existeLike(id_usuario, target);
    if (existe) {
      await this.likeRepository.deleteLike(id_usuario, target);
      return { liked: false };
    }

    const like = new Likes(null, id_usuario, target, new Date());
    await this.likeRepository.crearLike(like);
    return { liked: true };
  }
}
