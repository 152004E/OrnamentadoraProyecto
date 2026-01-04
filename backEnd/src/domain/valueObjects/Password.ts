export class Password {
  private readonly value: string;
  constructor(password: string) {
    if (password.length < 8) {
      throw new Error("La contraseña debe tener mas de 8 caracteres");
    }
    this.value = password;
  }
  // falta hacer el hash
  getValue(): string {
    return this.value;
  }

  equals(other: Password): boolean {
    return this.value === other.getValue();
  }
}