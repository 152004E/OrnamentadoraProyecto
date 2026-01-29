import {
  faBuildingCircleCheck,

  faClock,
  faPersonCircleCheck,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { AlertMessage } from "../componentsLayout/AlertMessage";
import { CardContact } from "./CardContact";
import { TitleSubTitle } from "../componentsLayout/TitleSubTitle";

export const ChoseUs = () => {
  return (
    <section className="py-6 px-6">
      <AlertMessage contenido="¿Por Qué Elegirnos?"   />
      <div className="flex flex-col tracking-tight gap-3 mb-8 mt-5">
        <TitleSubTitle
          title="Calidad y Confizanza en Cada Detalle"
          classTitle="text-[32px]"
          classSubTitle="text-gray-600 text-[17px] font-semibold"
          subTitle="Nuestra reputación se construye sobre cimientos sólidos. Entregamos
          excelencia en cada soldadura y diseño."
        />
      </div>
      <div className="p-4 flex flex-col gap-7">
        <CardContact
          title="Diseño a Medida"
          icon={faScrewdriverWrench}
          subTitle="Adaptamos cada estructura a las necesidades específicas de tu
              espacio."
        />
        <CardContact
          title="Garantía de Calidad"
          icon={faBuildingCircleCheck}
          subTitle="Materiales de primera y acabados que resisten el paso del tiempo."
        />
        <CardContact
          title="Mano de Obra Experta"
          icon={faPersonCircleCheck}
          subTitle="Equipo técnico altamente capacitado en ornamentación."
        />
        <CardContact
          title="Cumplimiento"
          icon={faClock}
          subTitle="Respetamos rigurosamente los cronogramas de entrega pactados."
        />
      </div>
    </section>
  );
};
