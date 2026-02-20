import { ImagenesDetalleProyecto } from "../../components/componentsLayout/proyectosComponents/ImagenesDetalleProyecto";
import {DetalleSection} from "../../components/componentsLayout/proyectosComponents/DetalleSection"
export const DetallesProyecto = () => {
  return (
    <section className="bg-gray-100">
        <ImagenesDetalleProyecto/>
        <DetalleSection/>
    </section>
  );
};
