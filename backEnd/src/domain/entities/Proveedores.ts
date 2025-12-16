import { Email } from "../valueObjects/Email";
import { Telefono } from "../valueObjects/Telefono";

export class Proveedores {
    constructor(
        public id_proveedor: number | null,
        public nombre_proveedor: string,
        public telefono_proveedor: Telefono,
        public direccion_proveedor: string,
        public email_proveedor: Email,
    ){}
}