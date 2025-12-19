export interface CrearUsuarioInput {
  nombre: string;
  correo: string;
  contraseña: string;
  telefono: string;
  direccion?: string;
  rol: "Administrador" | "Cliente";
}