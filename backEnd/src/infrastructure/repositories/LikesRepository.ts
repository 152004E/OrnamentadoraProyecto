import { Likes } from "../../domain/entities/likes";
import { ILikesRepository } from "../../domain/interfaces/ILikesRepository";
import { LikeTarget } from "../../domain/valueObjects/LikeTarget";
import { pool } from "../database/postgres";

export class LikesRepository implements ILikesRepository {
  async existeLike(id_usuario: number, target: LikeTarget): Promise<boolean> {
    const query = `SELECT 1 FROM likes WHERE id_usuario = $1 AND target_type = $2 AND target_id = $3`;

    const { rowCount } = await pool.query(query, [
      id_usuario,
      target.tipo,
      target.id,
    ]);

    return rowCount! > 0;
  }
  async crearLike(likes: Likes): Promise<Likes> {
    const query = `
      INSERT INTO likes (id_usuario, target_type, target_id, fecha_like)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const { rows } = await pool.query(query, [
      likes.id_usuario,
      likes.target.tipo,
      likes.target.id,
      likes.fecha_like,
    ]);
    return new Likes(
      rows[0].id_like,
      rows[0].id_usuario,
      new LikeTarget(rows[0].target_tipo, rows[0].target_id),
      rows[0].fecha_like
    );
  }
  async deleteLike(id_usuario: number, target: LikeTarget): Promise<void> {
    await pool.query(
      `DELETE FROM likes
       WHERE id_usuario = $1
         AND target_type = $2
         AND target_id = $3`,
      [id_usuario, target.tipo, target.id]
    );
  }
  async contarLikes(target: LikeTarget): Promise<number> {
    const { rows } = await pool.query(
      `SELECT COUNT(*) FROM likes
       WHERE target_type = $1
         AND target_id = $2`,
      [target.tipo, target.id]
    );
    return Number(rows[0].count);
  }
}

export const likesRepository = new LikesRepository();
