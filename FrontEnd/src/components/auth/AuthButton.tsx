import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AuthButtonProps {
  text: string;
  icon: IconDefinition;
  type: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export const AuthButton = ({
  text,
  type,
  icon,
  onClick,
  disabled,
}: AuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-600 w-full rounded-lg text-white flex gap-2 
        justify-center items-center py-3 mb-5 transition-all duration-300
        hover:bg-blue-700 active:scale-95
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      <span>{text}</span>

      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};
