import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  text: string;
  icon: IconDefinition;
  type: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  text,
  type,
  icon,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition`}
    >
      <span>{text}</span>

      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};
