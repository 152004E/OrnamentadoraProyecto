import { Request, Response } from "express";
import { CUCrearArchivoProyecto } from "../../application/UseCases/ArchivoProyectoUseCase/CrearArchivoProyecto";
import { archivo_ProyectoRepository } from "../../infrastructure/repositories/Archivo_ProyectoRepository";
import { proyectoRepository } from "../../infrastructure/repositories/ProyectoRepository";
import { CUBuscarArchivoProyectoPorId } from "../../application/UseCases/ArchivoProyectoUseCase/BuscarArchivoProyectoPorId";
import { CUListarArchivosPorProyecto } from "../../application/UseCases/ArchivoProyectoUseCase/ListarArchivosPorProyecto";
import { CUEliminarArchivoProyecto } from "../../application/UseCases/ArchivoProyectoUseCase/EliminarArchivoProyecto";

export class ArchivoProyectoController {
  async crear(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "No autorizado",
        });
      }
      const id_proyecto = Number(req.params.id);
      if (isNaN(id_proyecto)) {
        return res.status(400).json({
          message: "ID de proyecto invalido",
        });
      }
      const id_usuario = Number(req.user.id);
      if (isNaN(id_usuario)) {
        return res.status(400).json({ message: "ID de usuario inválido" });
      }
      const { url, mimeType, size, tipo_archivo } = req.body;

      if (!url || !mimeType || !size || !tipo_archivo) {
        return res.status(401).json({
          message: "Datos incompletos",
        });
      }
      const usecase = new CUCrearArchivoProyecto(
        archivo_ProyectoRepository,
        proyectoRepository
      );
      const archivo = await usecase.execute({
        id_proyecto,
        id_usuario,
        url,
        mimeType,
        size,
        tipo_archivo,
      });
      return res.status(200).json(archivo);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async buscarPorId(req: Request, res: Response) {
    try {
      const id_archivo = Number(req.params.id_archivo);
      if (isNaN(id_archivo)) {
        return res.status(400).json({
          message: "ID de archivo invalido",
        });
      }
      const usecase = new CUBuscarArchivoProyectoPorId(
        archivo_ProyectoRepository
      );

      const archivo = await usecase.execute(id_archivo);

      return res.status(200).json(archivo);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async buscarPorProyecto(req: Request, res: Response) {
    try {
      const id_proyecto = Number(req.params.id);
      if (isNaN(id_proyecto)) {
        return res.status(400).json({
          message: "ID de proyecto invalido",
        });
      }
      const usecase = new CUListarArchivosPorProyecto(
        archivo_ProyectoRepository
      );

      const archivo = await usecase.execute(id_proyecto);

      return res.status(200).json(archivo);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async eliminarArchivo(req: Request, res: Response) {
    try {
      const id_archivo = Number(req.params.id_archivo);
      if (isNaN(id_archivo)) {
        return res.status(400).json({
          message: "ID de archivo inválidos",
        });
      }

      const usecase = new CUEliminarArchivoProyecto(archivo_ProyectoRepository);
      await usecase.execute(id_archivo);
      return res.status(200).json({ message: "Archivo eliminado con exito" });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
