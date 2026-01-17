//Código del middleware JWT
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Roles } from "../../domain/valueObjects/Rol";

interface JwtPayLoad {
  id: number;
  rol: Roles;
}
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token no porporcionado",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayLoad;

    req.user = {
      id: decoded.id,
      rol : decoded.rol as Roles
    }
    next()
  } catch (error) {
    return res.status(401).json({
        message : "Token invalido o expirado"
    })
  }
};
