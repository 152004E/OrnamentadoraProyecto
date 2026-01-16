import { Request, Response, NextFunction } from "express";
import { Roles } from "../../domain/valueObjects/Rol";

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // aca se usa el otro middle para la autenticacion
  if (!req.user) {
    return res.status(401).json({
      message: "NO autenticado",
    });
  }

  //valida el rol
  if (req.user.rol !== Roles.ADMIN) {
    return res.status(403).json({
      message: "Acceso denegado : solo administradores",
    });
  }
  next();
};
