
export class Password {
  private readonly value: string;
  constructor(password: string) {
    
    this.value = password;
  }

  static fromPlain (password : string):Password{
    if (password.length < 8) {
      throw new Error("La contraseña debe tener mas de 8 caracteres");
    }
    return new Password(password)
  }

  static fromHash ( hash: string): Password{
    return new Password(hash)
  }
  getValue(): string {
    return this.value;
  }
} 