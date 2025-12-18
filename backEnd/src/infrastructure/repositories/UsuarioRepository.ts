import { Usuario } from "../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";

export class UsuarioRepository implements IUsuarioRepository {
  // esto es una simulacion en memoria como si fuera una base de datos
  private usuarios : Usuario[] = [];
  async crear(usuario: Usuario): Promise<Usuario> {
    //Aqui luego se guarda en la base de datos

    this.usuarios.push(usuario)
    return usuario;
  }
  async buscarPorEmail(correo: string): Promise<Usuario | null> {
    // Aqui luego lo llama de la base de datos
    console.log("Buscando correo electronico", correo);
    return null;
  }
  async listar(): Promise<Usuario[]> {
    return this.usuarios;
  }
  async actualizar(id: number, data: Partial<Usuario>): Promise<Usuario> {
    //aun no se ha implementado el metodo en le useCase
    throw new Error("Method not implemented.");
  }
  async eliminar(id: number): Promise<void> {
    // aun no se ha implementado el metodo en el usecase
    throw new Error("Method not implemented.");
  }
}

export const usuarioRepository = new UsuarioRepository();
