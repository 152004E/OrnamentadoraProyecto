import { Request, Response } from "express";
import { CUCrearProyecto } from "../../application/UseCases/ProyectoUseCase/CrearProyecto";
import { proyectoRepository } from "../../infrastructure/repositories/ProyectoRepository";
import { CUListarProyectos } from "../../application/UseCases/ProyectoUseCase/ListarProyectos";
import { CUBuscarProyectoPorId } from "../../application/UseCases/ProyectoUseCase/BuscarProyectoPorId";
import { CUActualizarProyecto } from "../../application/UseCases/ProyectoUseCase/ActualizarProyecto";

export class ProyectoController {
  async crear(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "no Autorizado",
        });
      }
      const usecase = new CUCrearProyecto(proyectoRepository);

      const proyecto = await usecase.execute(req.body, req.user.id);
      return res.status(201).json(proyecto);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const usecase = new CUListarProyectos(proyectoRepository);
      const proyectos = await usecase.execute();

      return res.status(200).json(proyectos);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async buscarPorid(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const usecase = new CUBuscarProyectoPorId(proyectoRepository);
      const proyecto = await usecase.execute(id);

      if (!proyecto) {
        throw new Error("Proyecto no Encontrado");
      }
      return res.status(200).json(proyecto);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async actualizar(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "No autorizado" });
      }
      const id = Number(req.params.id);

      const proyecto = await proyectoRepository.buscarPorId(id);

      if (!proyecto) {
        throw new Error("Proyecto no encontrado");
      }

      if(proyecto.id_usuario !== req.user.id){
                throw new Error("No puedes modificar este proyecto");

      }
      const usecase = new CUActualizarProyecto(proyectoRepository);

      const acutazado = await usecase.execute(id, req.body);

      return res.status(200).json(acutazado);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async eliminar(req: Request, res: Response) {
    try {
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
