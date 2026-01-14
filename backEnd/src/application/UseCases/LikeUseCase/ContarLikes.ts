import { ILikesRepository } from "../../../domain/interfaces/ILikesRepository";
import { LikeTarget } from "../../../domain/valueObjects/LikeTarget";

export class CUContarLikes {
  constructor(private likesRepository: ILikesRepository) {}
  async execute(target: LikeTarget): Promise<number> {
    return await this.likesRepository.contarLikes(target);
  }
}
