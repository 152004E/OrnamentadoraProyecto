import { Request, Response } from "express";
import { likesRepository } from "../../infrastructure/repositories/LikesRepository";
import { LikeTarget } from "../../domain/valueObjects/LikeTarget";
import { CUToggleLike } from "../../application/UseCases/LikeUseCase/ToggleLike";
import { proyectoRepository } from "../../infrastructure/repositories/ProyectoRepository";
import { comentarioRepository } from "../../infrastructure/repositories/ComentarioRepository";
import { CUContarLikes } from "../../application/UseCases/LikeUseCase/ContarLikes";

export class LikesController {
  async toggleLikeProyecto(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "No autorizado",
        });
      }

      const idProyecto = Number(req.params.id);
      if (isNaN(idProyecto)) {
        return res.status(400).json({
          message: "ID de proyecto inválido",
        });
      }

      const usecase = new CUToggleLike(
        likesRepository,
        proyectoRepository,
        comentarioRepository
      );
      const target = LikeTarget.proyecto(idProyecto);

      const result = await usecase.execute(req.user.id, target);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async toggleLikeComentario(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "No autorizado",
        });
      }

      const idComentario = Number(req.params.id_comentario);
      if (isNaN(idComentario)) {
        return res.status(400).json({
          message: "ID de comentario inválido",
        });
      }

      const usecase = new CUToggleLike(
        likesRepository,
        proyectoRepository,
        comentarioRepository
      );
      const target = LikeTarget.comentario(idComentario);

      const result = await usecase.execute(req.user.id, target);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async contarLikesProyecto(req: Request, res: Response) {
    try {
      const idProyecto = Number(req.params.id);
      if (isNaN(idProyecto)) {
        return res.status(400).json({
          message: "ID de proyecto invalido",
        });
      }
      const usecase = new CUContarLikes(likesRepository);
      const target = LikeTarget.proyecto(idProyecto)

      const total = await usecase.execute(target)

      return res.status(200).json({total})
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async contarLikesComentarios(req: Request, res: Response) {
    try {
      const idComentario = Number(req.params.id_comentario);
      if (isNaN(idComentario)) {
        return res.status(400).json({
          message: "ID de comentario invalido",
        });
      }
      const usecase = new CUContarLikes(likesRepository);
      const target = LikeTarget.comentario(idComentario)

      const total = await usecase.execute(target)

      return res.status(200).json({total})
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
