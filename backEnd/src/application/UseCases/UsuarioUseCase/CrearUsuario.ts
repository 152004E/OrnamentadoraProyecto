import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
import { CrearUsuarioDTO } from "../../../presentation/DTO/UsuariosDto/CrearUsuarioDTO";
import { Usuario } from "../../../domain/entities/Usuario";
import { Email } from "../../../domain/valueObjects/Email";
import { Password } from "../../../domain/valueObjects/Password";
import { Rol , Roles  } from "../../../domain/valueObjects/Rol";
import { Telefono } from "../../../domain/valueObjects/Telefono";

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