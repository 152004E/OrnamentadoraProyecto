import { ILikesRepository } from "../../../domain/interfaces/ILikesRepository";
import { LikeTarget } from "../../../domain/valueObjects/LikeTarget";
import { ValidateLikeTarget } from "./ValidateLikeTarget";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class CUHasLiked {
  constructor(
    private likesRepository: ILikesRepository,
    private proyectoRepository: IProyectoRepository,
    private comentarioRepository: IComentariosRepository
  ) {}

  async execute(
    id_usuario: number,
    target: LikeTarget
  ): Promise<{ hasLiked: boolean }> {

    const validator = new ValidateLikeTarget(
      this.proyectoRepository,
      this.comentarioRepository
    );

    await validator.execute(target);

    const existe = await this.likesRepository.existeLike(id_usuario, target);
    return { hasLiked: existe };
  }
}
