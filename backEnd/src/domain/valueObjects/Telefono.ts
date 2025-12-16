export class Telefono {
  private readonly value: string;
  constructor(telefono: string) {
    if (!/^\d{10}$/.test(telefono)) {
      throw new Error("Numero invalido");
    }
    this.value = telefono;

    
  }
  getValue(): string {
    return this.value;
  }
}
