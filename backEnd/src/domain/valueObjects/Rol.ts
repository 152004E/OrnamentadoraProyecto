export enum Roles{
    ADMIN = "ADMINISTRADOR",
    CLIENTE = "CLIENTE"
}

export class Rol{
    private readonly value: Roles;
    constructor(rol:Roles){
        this.value = rol    
    }
    getValue(): Roles{
        return this.value
    }
}