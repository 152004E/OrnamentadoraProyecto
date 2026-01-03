import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
import { Email } from "../../../domain/valueObjects/Email";
import { Password } from "../../../domain/valueObjects/Password";
import { Rol } from "../../../domain/valueObjects/Rol";
import { Telefono } from "../../../domain/valueObjects/Telefono";

export class CUActualizarUsuario {
  constructor(private usuarioRepository: IUsuarioRepository) {}
  async execute(id: number, data: any): Promise<Usuario> {
    const usuarioExistente = await this.usuarioRepository.buscarPorId(id);
    if (!usuarioExistente) {
      throw new Error("Usuario no encontrado");
    }
    if (data.nombre) usuarioExistente.nombre = data.nombre;
    if (data.correo) usuarioExistente.correo = new Email(data.correo);
    if (data.contraseña)
      usuarioExistente.contraseña = new Password(data.contraseña);
    if (data.telefono) usuarioExistente.telefono = new Telefono(data.telefono);
    if (data.direccion) usuarioExistente.direccion = data.direccion;
    if (data.rol) usuarioExistente.rol = new Rol(data.rol);

    return await this.usuarioRepository.actualizar(id, usuarioExistente);
  }
}
