// aqui van la regla para ver que datos de pueden ver cuando se accede con una ruta, son los header que se ven en el postman

import { Usuario } from "../../domain/entities/Usuario";

export class UsuarioMapper {
  static toResponse(usuario: Usuario) {
    return {
      id_usuario: usuario.id_usuario,
      nombre: usuario.nombre,
      correo: usuario.correo.getValue(),
      telefono: usuario.telefono.getValue(),
      direccion: usuario.direccion,
      rol: usuario.rol.getValue(),
      estado: usuario.estado,
      fecha_creacion_cuenta: usuario.fecha_creacion_cuenta,
    };
  }
}
