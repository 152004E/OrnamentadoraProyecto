import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
import { ActualizarUsuarioInput } from "./ActualizarUsuarioInput";
import { Password } from "../../../domain/valueObjects/Password";
import { Email } from "../../../domain/valueObjects/Email";
import { Rol } from "../../../domain/valueObjects/Rol";
import { Telefono } from "../../../domain/valueObjects/Telefono";
import { PasswordHasher } from "../../../infrastructure/services/PasswordHasher";

export class CUActualizarUsuario {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(id: number, data: ActualizarUsuarioInput): Promise<Usuario> {
    const usuario = await this.usuarioRepository.buscarPorId(id);

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    if (data.nombre) usuario.nombre = data.nombre;
    if (data.correo) usuario.correo = new Email(data.correo);
    if (data.telefono) usuario.telefono = new Telefono(data.telefono);
    if (data.direccion) usuario.direccion = data.direccion;
    if (data.rol) usuario.rol = new Rol(data.rol);
    if (data.estado !== undefined) usuario.estado = data.estado;

    // 🔥 CLAVE: HASH AQUÍ
    if (data.contraseña) {
      const hash = await PasswordHasher.hash(data.contraseña)
      usuario.contraseña = Password.fromHash(hash);
    }

    return this.usuarioRepository.actualizar(id, usuario);
  }
}
