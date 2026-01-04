import { Usuario } from "../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";

export class UsuarioRepository implements IUsuarioRepository {
  // esto es una simulacion en memoria como si fuera una base de datos
  private usuarios: Usuario[] = [];
  private nextId = 1;
  async crear(usuario: Usuario): Promise<Usuario> {
    //Aqui luego se guarda en la base de datos
    usuario.id_usuario = this.nextId;
    this.nextId++;
    this.usuarios.push(usuario);
    return usuario;
  }
  async listar(): Promise<Usuario[]> {
    return this.usuarios;
  }
  async buscarPorId(id: number): Promise<Usuario | null> {
    const usuario = this.usuarios.find((u) => u.id_usuario === id);
    return usuario ?? null;
  }
  async buscarPorEmail(correo: string): Promise<Usuario | null> {
    // Aqui luego lo llama de la base de datos
    const usuario = this.usuarios.find((u)=> u.correo.getValue() === correo)
    return usuario ?? null;
  }

  async actualizar(id: number, data: Usuario): Promise<Usuario> {
    const index = this.usuarios.findIndex((u) => u.id_usuario === id);
    if (index === -1) {
      throw new Error("Usuario no encontrado");
    }
    this.usuarios[index] = data;
    return this.usuarios[index];
  }
  async eliminar(id: number): Promise<void> {
    const index = this.usuarios.findIndex((u) => u.id_usuario === id)
    if(index === -1){
      throw new Error("Usuario no encontrado")
    }
    this.usuarios.splice(index, 1)
  }
}

export const usuarioRepository = new UsuarioRepository();
