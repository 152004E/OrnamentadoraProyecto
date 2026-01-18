import { Usuario } from "../../domain/entities/Usuario";
import { AuthResponseDTO } from "../DTO/AuthDto/AuthResponseDTO";

export class AuthMapper {
  static toResponse(usuario: Usuario, token: string): AuthResponseDTO {
    if (!usuario.id_usuario) {
      throw new Error("Usuario sin ID no puede autenticarse");
    }

    return {
      token,
      user: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        rol: usuario.rol.getValue(),
      },
    };
  }
}
