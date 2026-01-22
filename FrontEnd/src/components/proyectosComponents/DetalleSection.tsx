import {
  faLocationDot,
  faScrewdriverWrench,
  faClock,
  faCircleCheck,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button";

export const DetalleSection = () => {
  return (
    <section className="flex flex-col p-6 gap-6">
      <p className="text-blue-700">Infraestructura - Seguridad</p>
      <h3 className="text-3xl tracking-wide text-blue-900 font-bold">
        Sistema de Cerramiento Metálico
      </h3>
      <p className="font-semibold text-gray-400">
        Diseño e instalación de un sistema de cerramiento metálico integral para
        áreas residenciales y comerciales. El proyecto se enfocó en proporcionar
        la máxima seguridad sin comprometer la estética moderna del entorno. Se
        utilizaron materiales de alta resistencia tratados contra la corrosión
        para garantizar una durabilidad prolongada en exteriores.
      </p>
      <h3 className="font-semibold text-black text-lg">
        Especificaciones Técnicas
      </h3>
      <div className="flex justify-around items-center">
        <article className="flex flex-col justify-center items-center gap-1 bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className="text-blue-600"
          />
          <p className="text-[12px] font-semibold text-gray-400">MATERIAL</p>
          <p className="text-[12px] font-semibold">Hierro / Acero</p>
        </article>

        <article className="flex flex-col justify-center items-center gap-1 bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
          <FontAwesomeIcon icon={faClock} className="text-blue-600" />
          <p className="text-[12px] font-semibold text-gray-400">DURACIÓN</p>
          <p className="text-[12px] font-semibold">15 Días</p>
        </article>

        <article className="flex flex-col justify-center items-center gap-1 bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-600" />
          <p className="text-[12px] font-semibold text-gray-400">UBICACIÓN</p>
          <p className="text-[12px] font-semibold">Residencial</p>
        </article>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-black text-lg">Detallese de Obra</h3>
        <article>
          <p className="flex items-center py-2 px-2 border justify-center rounded-xl  w-full gap-2 bg-blue-200/60 text-blue-700 font-semibold">
            <FontAwesomeIcon icon={faCircleCheck} />
            Pintura electrostatica con acabado mate de alta resistencia
          </p>
        </article>
        <article>
          <p className="flex items-center py-2 px-2 border justify-center rounded-xl  w-full gap-2 bg-blue-200/60 text-blue-700 font-semibold">
            <FontAwesomeIcon icon={faCircleCheck} />
            Postes de soporte treforzado con anclaje quimico
          </p>
        </article>
        <article>
          <p className="flex items-center py-2   px-2 border justify-center rounded-xl  w-full gap-2 bg-blue-200/60 text-blue-700 font-semibold">
            <FontAwesomeIcon icon={faCircleCheck} />
            Malla electrosoldada de diseño antipaso
          </p> 
        </article>
      </div>
      <div className="flex w-full justify-center items-center">
        <Button text="Solicitar Contizacion Similar" icon={faPaperPlane}/>
      </div>
    </section>
  );
};
