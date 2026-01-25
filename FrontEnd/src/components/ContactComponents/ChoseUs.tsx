import {
    faBuildingCircleCheck,
  faCircleQuestion,
  faClock,
  faPersonCircleCheck,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { AlertMessage } from "../componentsLayout/AlertMessage";
import { CardContact } from "./CardContact";

export const ChoseUs = () => {
  return (
    <section className="py-6 px-6">
      <AlertMessage contenido="Por Qué Elegirnos" icon={faCircleQuestion} />
      <div className="flex flex-col tracking-tight gap-3 mb-8 mt-5">
        <h2 className="font-bold text-[32px]">
          Calidad y Confizanza en Cada Detalle{" "}
        </h2>
        <p className="text-gray-600 text-[17px] font-semibold">
          Nuestra reputación se construye sobre cimientos sólidos. Entregamos
          excelencia en cada soldadura y diseño.
        </p>
      </div>
      <div className="p-4 flex flex-col gap-7">
       
        <CardContact
          title="Diseño a Medida"
          icon={faScrewdriverWrench}
          context="Adaptamos cada estructura a las necesidades específicas de tu
              espacio."
        />
        <CardContact
          title="Garantía de Calidad"
          icon={faBuildingCircleCheck}
          context="Materiales de primera y acabados que resisten el paso del tiempo."
        />
        <CardContact
          title="Mano de Obra Experta"
          icon={faPersonCircleCheck}
          context="Equipo técnico altamente capacitado en ornamentación."
        />
        <CardContact
          title="Cumplimiento"
          icon={faClock}
          context="Respetamos rigurosamente los cronogramas de entrega pactados."
        />
      </div>
    </section>
  );
};
