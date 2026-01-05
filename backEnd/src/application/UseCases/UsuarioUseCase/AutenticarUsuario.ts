// este es el login

import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
import { Email } from "../../../domain/valueObjects/Email";
import { Password } from "../../../domain/valueObjects/Password";
import { PasswordHasher } from "../../../infrastructure/services/PasswordHasher";

export class CUAutenticarUsuario {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(correo: string, contraseña: string) {
    // validar el correo
    const email = new Email(correo);
    const password = new Password(contraseña);

    // buscar usuario por email

    const usuario = await this.usuarioRepository.buscarPorEmail(
      email.getValue()
    );
    if (!usuario) {
      throw new Error("Credenciales invalidas");
    }

    const passwordValida = await PasswordHasher.compare(
      contraseña, usuario.contraseña.getValue()
    )
    // validar contraseña
    if(!passwordValida){
        throw new Error("Credenciales invalidas")
    }

    return usuario
  }

}
