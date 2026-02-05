import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HelpBox = () => {
  return (
    <div className="flex items-start gap-3 border border-dashed border-blue-300 bg-blue-50/40 rounded-xl p-4 my-7">
      
      {/* ICON */}
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
        <FontAwesomeIcon icon={faCircleInfo} />
      </span>

      {/* TEXT */}
      <div>
        <p className="font-semibold text-gray-900">
          ¿Necesitas ayuda?
        </p>
        <p className="text-sm text-gray-500">
          Configura cómo se presentan tus trabajos de ornamentación ante tus
          clientes potenciales.
        </p>
      </div>
    </div>
  );
};
