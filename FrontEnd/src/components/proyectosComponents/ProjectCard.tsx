import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import rejaProyecto from "../../assets/rejaProyecto.jpg";
import { Button } from "../componentsLayout/Button";

export const ProjectCard = () => {
  return (
    <article className="w-full border border-gray-200 max-w-md bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      
      {/* Imagen con overlay */}
      <div className="relative h-65">
        <img
          src={rejaProyecto}
          alt="Proyecto"
          className="w-full h-full object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-liner-to-t from-black via-blue-600 to-transparent"></div>

        

        {/* Texto sobre imagen */}
        <div className="absolute bottom-1 left-6 text-white backdrop-blur-md bg-white/20  rounded-lg px-2 py-1 ">
          <h2 className="text-lg font-bold ">
            Sistema de Cerramiento Metálico
          </h2>
          <p className="text-[11px] text-gray-200">
            Infraestructura · Seguridad
          </p>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="px-3 py-4 space-y-3">

        {/* Progreso + tareas */}
        <div className="flex items-start justify-between">

          {/* Progreso circular */}
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#1d4ed8"
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * 32}
                strokeDashoffset={2 * Math.PI * 32 * (1 - 0.65)}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-semibold text-gray-700">
              65%
            </span>
          </div>

          {/* Próximas tareas */}
          <div className="flex-1 ml-4">
           <p className="text-start text-gray-600 "> Diseño e instalación de un sistema de cerramiento metálico para áreas residenciales y comerciales, enfocado en seguridad, durabilidad y estética moderna. </p>
          </div>
        </div>

        <div className="border-t pt-2 flex items-center justify-between">

          {/* Avatares */}
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700">
              JD
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs font-semibold text-blue-700">
              MS
            </div>
          </div>

          {/* Fecha */}
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase">
              Entrega estimada
            </p>
            <p className="text-sm font-semibold text-gray-700">
              24 Oct, 2023
            </p>
          </div>
        </div>

        {/* Botón opcional */}
        <Button
          to="/detalleProyectos"
          text="Ver Proyecto"
          iconRight={faFolderOpen}
          type="submit"
        />
      </div>
    </article>
  );
};
