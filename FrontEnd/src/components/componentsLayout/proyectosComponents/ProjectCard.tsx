import { faFolderOpen, faPen } from "@fortawesome/free-solid-svg-icons";
import rejaProyecto from "../../../assets/rejaProyecto.jpg";
import { Button } from "../Button";

interface ProjectCardProps {
  mode?: "view" | "edit";
  showStatus?: boolean;
  progress?: number;
}

export const ProjectCard = ({
  mode = "view",
  showStatus = false,
  progress = 65,
}: ProjectCardProps) => {
  const isEditMode = mode === "edit";

  return (
    <article className="w-full border border-gray-200 max-w-md bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Imagen */}
      <div className="relative h-65">
        <img
          src={rejaProyecto}
          alt="Proyecto"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-gray-700/10 to-transparent"></div>
        {/* Estado */}
        {showStatus && (
          <span className="absolute top-4 left-4 z-10 text-[11px] bg-green-500 text-white px-3 py-1 rounded-full shadow-md">
            En Progreso
          </span>
        )}

        <div className="absolute bottom-2 left-6 text-white backdrop-blur-md bg-white/20 rounded-lg px-3 py-2">
          <h2 className="text-lg font-bold">Sistema de Cerramiento Metálico</h2>
          <p className="text-[11px] text-gray-200">
            Infraestructura · Seguridad
          </p>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="px-4 py-4 space-y-4">
        <div className="flex items-start justify-between">
          {/* Progreso dinámico */}
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
                strokeDashoffset={2 * Math.PI * 32 * (1 - progress / 100)}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-semibold text-gray-700">
              {progress}%
            </span>
          </div>

          <div className="flex-1 ml-4">
            <p className="text-sm text-gray-600">
              Diseño e instalación de un sistema de cerramiento metálico
              enfocado en seguridad y durabilidad.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-3 flex justify-end">
          <Button
            to="/detalleProyectos"
            text={isEditMode ? "Editar Proyecto" : "Ver Proyecto"}
            iconRight={isEditMode ? faPen : faFolderOpen}
            type="button"
          />
        </div>
      </div>
    </article>
  );
};
