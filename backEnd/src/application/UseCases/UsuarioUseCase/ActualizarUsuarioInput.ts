import { Roles } from "../../../domain/valueObjects/Rol";

export interface ActualizarUsuarioInput {
  nombre?: string;
  correo?: string;
  contraseña?: string;
  telefono?: string;
  direccion?: string;
  rol?: Roles;
  estado?: boolean;
}
