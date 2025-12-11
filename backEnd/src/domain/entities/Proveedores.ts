export class Proveedores {
    constructor(
        public id_proveedor: number | null,
        public nombre_proveedor: string,
        public telefono_proveedor: string,
        public direccion_proveedor: string,
        public email_proveedor: string,
    ){}
}