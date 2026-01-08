import { Request, Response } from "express";
import { CUCrearComentario } from "../../application/UseCases/ComentarioUseCase/CrearComentario";
import { comentarioRepository } from "../../infrastructure/repositories/ComentarioRepository";
import { CUListarComentarioPorProyecto } from "../../application/UseCases/ComentarioUseCase/ListarComentarioPorProyecto";
import { Result } from "pg";

export class ComentarioController {
  async crear(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "No autorizado",
        });
      }
      const idProyecto = Number(req.params.id);
      const usecase = new CUCrearComentario(comentarioRepository);

      const comentario = await usecase.execute(req.body, idProyecto, req.user.id);

      return res.status(201).json(comentario);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async ListarPorProyecto(req: Request, res: Response) {
    try {
      const idProyecto = Number(req.params.id);
      if (isNaN(idProyecto)) {
       return  res.status(400).json({
          message: "ID de proyecto no valido",
        });
      }
      const usecase = new CUListarComentarioPorProyecto(comentarioRepository);
      const comentario = await usecase.execute(idProyecto);
      return res.status(200).json(comentario);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
