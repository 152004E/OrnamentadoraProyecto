import {
  faBlind,
  faCircleCheck,
  faClock,
  faEye,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutUsSection = () => {
  return (
    <section className="p-6 flex flex-col gap-5">
      <div className="bg-blue-200/60 h-30  p-3 rounded-xl  ">
        <h3 className="flex items-center gap-2 text-blue-600 font-bold mb-2">
          <FontAwesomeIcon icon={faFlag} />
          Nuestra Misión
        </h3>
        <p className="text-blue-600/40 font-bold text-[13px]">
          Construir infraestructura duradera que combine la robustez industrial
          con la elegancia arquitectónica, superando las expectativas en cada
          soldadura.
        </p>
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
      <div className="flex justify-around items-center">
        <article className="flex flex-col justify-center items-center  bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
          <FontAwesomeIcon icon={faClock} className="text-blue-600" />
          <p className="text-[17px] font-semibold ">8+</p>
          <p className="text-[12px] font-semibold text-gray-400">AÑOS</p>
        </article>

        <article className="flex flex-col justify-center items-center  bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
          <FontAwesomeIcon icon={faBlind} className="text-blue-600" />
          <p className="text-[17px] font-semibold ">100+</p>
          <p className="text-[12px] font-semibold text-gray-400">PROYECTOS</p>
        </article>

        <article className="flex flex-col justify-center items-center bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
          <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600" />
          <p className="text-[17px] font-semibold ">100%</p>
          <p className="text-[12px] font-semibold text-gray-400">CALIDAD</p>
        </article>
      </div>
    </section>
  );
};
