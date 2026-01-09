import { Likes } from "../entities/likes";
import { LikeTarget } from "../valueObjects/LikeTarget";

export interface ILikesRepository {
  existeLike(id_usuario: number, target: LikeTarget): Promise<boolean>;

  crearLike(likes: Likes): Promise<Likes>;

  deleteLike (id_usuario : number , target: LikeTarget): Promise<void>;

  contarLikes (target : LikeTarget): Promise<number>;
}
