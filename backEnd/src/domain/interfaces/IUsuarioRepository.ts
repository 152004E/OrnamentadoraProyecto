import { ActualizarUsuarioInput } from "../../application/UseCases/UsuarioUseCase/ActualizarUsuarioInput";
import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  crear(usuario: Usuario): Promise<Usuario>;
  buscarPorEmail(correo: string): Promise<Usuario | null>;
  buscarPorId(id: number): Promise<Usuario | null>;
  listar(): Promise<Usuario[]>;
  actualizar(id: number, usuario: Usuario): Promise<Usuario>; 
  eliminar(id: number): Promise<void>;
}
