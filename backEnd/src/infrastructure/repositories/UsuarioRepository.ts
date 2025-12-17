import { Usuario } from "../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";

export class UsuarioRepository implements IUsuarioRepository {
  async crear(usuario: Usuario): Promise<Usuario> {
    //Aqui luego se guarda en la base de datos
    console.log("Creando usuario", usuario);
    return usuario;
  }
  async buscarPorEmail(correo: string): Promise<Usuario | null> {
    // Aqui luego lo llama de la base de datos
    console.log("Buscando correo electronico", correo);
    return null;
  }
  async listar(): Promise<Usuario[]> {
    return[];
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
