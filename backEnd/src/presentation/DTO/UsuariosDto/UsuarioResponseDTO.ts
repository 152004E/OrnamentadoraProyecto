export interface UsuarioResponseDTO {
  id: number | null;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  rol: string;
  estado: boolean;
  fechaCreacion: Date;
}
// estos son los datos que salen y que no permite que se filtren datos sencibles en este caso la contraseña