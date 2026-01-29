import { faEye, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatsSection } from "../componentsLayout/MainLayout/StatsSection";
import { TitleSubTitle } from "../componentsLayout/TitleSubTitle";

export const AboutUsSection = () => {
  return (
    <section className="p-6 flex flex-col gap-5">
      <div className="bg-blue-200/60 h-30 flex   p-3 rounded-xl  ">
        <TitleSubTitle
          icon={faFlag}
          title="Nuestra Misión"
          subTitle="Construir infraestructura duradera que combine la robustez industrial con la elegancia arquitectónica, superando las expectativas en cada soldadura."
          classTitle="text-blue-600! font-bold!"
          classSubTitle="text-blue-600/40! font-bold! text-[13px]!"
        />
      </div>
      <div className="bg-blue-200/60 h-30  p-3 rounded-xl  ">
        <h3 className="flex items-center gap-2 text-blue-600 font-bold  mb-2">
          <FontAwesomeIcon icon={faEye} />
          Nuestra Visión
        </h3>
        <p className="text-blue-600/40 font-bold text-[13px]">
          Ser líderes indiscutibles en ornamentación metálica a nivel nacional,
          reconocidos por nuestra innovación técnica y diseño sustentable.
        </p>
      </div>
      <StatsSection />
    </section>
  );
};
