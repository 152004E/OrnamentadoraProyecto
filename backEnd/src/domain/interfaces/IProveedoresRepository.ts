import { Proveedores } from "../entities/Proveedores";

export interface IProveedoresRepository {
    crear(proveedor: Proveedores): Promise<Proveedores>;
    findById(id_proveedor: number): Promise<Proveedores | null>;
    findByNombre(nombre_proveedor: string): Promise<Proveedores | null>;
    actualizarProveedor(proveedor: Proveedores): Promise<Proveedores>;
    delete(id_proveedor: number): Promise<void>;
}