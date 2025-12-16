export class Monto{
    private readonly value: number;
    constructor(value:number){
        if(value <= 0 ){
            throw new Error ("El monto debe ser mayor a 0")
        }
        this.value = value;
    }
    getValue():number{
        return this.value
    }
}