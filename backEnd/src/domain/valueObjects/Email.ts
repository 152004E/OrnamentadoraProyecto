export class Email {
  private readonly value: string;

  constructor(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Email no valido");
    }
    this.value = email;
  }
  getValue(): string {
    return this.value;
  }
}
