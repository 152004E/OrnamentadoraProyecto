import type { IconDefinition} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AlertMessageProps {
  contenido: string;
  icon?: IconDefinition;
}

export const AlertMessage = ({ contenido, icon }: AlertMessageProps) => {
  return (
    <p className="flex items-center py-2 justify-center rounded-xl shadow-blue-200 shadow-2xl w-full gap-2 bg-blue-200/60 text-blue-700 font-semibold">
      {icon && <FontAwesomeIcon icon={icon} className="text-lg" />}
      {contenido}
    </p>
  );
};
