import { ILikesRepository } from "../../../domain/interfaces/ILikesRepository";
import { LikeTarget } from "../../../domain/valueObjects/LikeTarget";
import { ValidateLikeTarget } from "./ValidateLikeTarget";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class CUContarLikes {
  constructor(
    private likesRepository: ILikesRepository,
    private proyectoRepository: IProyectoRepository,
    private comentarioRepository: IComentariosRepository
  ) {}

  async execute(target: LikeTarget): Promise<number> {
    const validator = new ValidateLikeTarget(
      this.proyectoRepository,
      this.comentarioRepository
    );

    await validator.execute(target);

    return this.likesRepository.contarLikes(target);
  }
}
