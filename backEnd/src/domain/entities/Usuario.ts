import { Email } from "../valueObjects/Email";
import { Password } from "../valueObjects/Password";
import { Rol } from "../valueObjects/Rol";
import { Telefono } from "../valueObjects/Telefono";

export class Usuario {
  constructor(
    public id_usuario: number | null,
    public nombre: string,
    public correo: Email,
    public contraseña: Password,
    public telefono: Telefono,
    public direccion: string,
    public fecha_creacion_cuenta: Date,
    public rol: Rol,
    public estado: boolean
  ) {}
}
