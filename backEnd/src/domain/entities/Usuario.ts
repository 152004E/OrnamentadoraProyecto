export class Usuario {
  constructor(
    public id_usuario: number | null,
    public nombre: string,
    public correo: string,
    public contraseña: string,
    public telefono: string,
    public direccion: string,
    public fecha_creacion_cuenta: Date,
    public rol: string,
    public estado: boolean
  ) {}
}
