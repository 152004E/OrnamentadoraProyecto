import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import rejaProyecto from "../../public/rejaProyecto.jpg";
import { Button } from "./Button";
export const ProjectCard = () => {
  return (
    <article className="w-full bg-blue-200/60 p-6 rounded-2xl">
      <img src={rejaProyecto} alt="" className="w-full h-57.5  rounded-2xl" />
      <div className="flex flex-col  items-start">
        <h3 className="my-2 text-blue-500/90 font-semibold text-sm ">
          Infraestructura · Seguridad
        </h3>
        <h2 className="text-blue-700 font-semibold text-[21px] tracking-tighter mb-2">
          Sistema de Cerramiento Metálico
        </h2>
        <p className="text-start text-gray-600 mb-3">
          Diseño e instalación de un sistema de cerramiento metálico para áreas
          residenciales y comerciales, enfocado en seguridad, durabilidad y
          estética moderna.
        </p>
        <Button text="Ver Proyecto" icon={faFolderOpen} type="submit" />
       
      </div>
    </article>
  );
};
