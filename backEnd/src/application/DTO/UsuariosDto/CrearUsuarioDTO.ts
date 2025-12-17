export interface CrearUsuarioDTO {
    nombre: string;
    correo: string;
    contraseña: string;
    telefono: string;
    direccion?: string;
    rol: "Administrador" | "Cliente";
}