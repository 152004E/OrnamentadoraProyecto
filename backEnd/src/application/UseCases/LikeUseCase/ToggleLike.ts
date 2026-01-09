import { Likes } from "../../../domain/entities/likes";
import { ILikesRepository } from "../../../domain/interfaces/ILikesRepository";
import { LikeTarget } from "../../../domain/valueObjects/LikeTarget";

export class CUToggleLike {
  constructor(private likeRepository: ILikesRepository) {}
  async execute(
    id_usuario: number,
    target: LikeTarget
  ): Promise<{ liked: boolean }> {
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
