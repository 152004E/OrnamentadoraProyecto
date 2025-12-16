import { IUsuarioRepository } from "../../interfaces/IUsuarioRepository";
import { CrearUsuarioDTO } from "../DTO/CrearUsuarioDTO";
import { Usuario } from "../../entities/Usuario";
import { Email } from "../../valueObjects/Email";
import { Password } from "../../valueObjects/Password";
import { Rol } from "../../valueObjects/Rol";
import { Telefono } from "../../valueObjects/Telefono";
import { Roles } from "../../valueObjects/Rol";

export class CUCrearUsuario {
constructor(
    private readonly usuarioRepository: IUsuarioRepository){}

    async execute(data: CrearUsuarioDTO): Promise<Usuario>{
        
        const existe = await this.usuarioRepository.buscarPorEmail(data.correo);
        if(existe){
            throw new Error('El correo ya está registrado');
        }

        const email = new Email(data.correo);
        const password = new Password(data.contraseña);
        const telefono = new Telefono(data.telefono);
        const rol = data.rol === "Administrador" ? new Rol(Roles.ADMIN) : new Rol(Roles.CLIENTE);
        
        const nuevoUsuario = new Usuario(
            null, // ID será generado por la base de datos
            data.nombre,
            email,
            password,
            telefono,
            data.direccion || '', // Dirección del DTO o cadena vacía
            new Date(),
            rol,
            true // Estado activo por defecto
        );

        return await this.usuarioRepository.crear(nuevoUsuario);
    }
}