import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  text: string;
  iconLetf?: IconDefinition;
  iconRight?: IconDefinition;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  to,
  text,
  type,
  iconLetf,
  iconRight,
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  {
    /*🔹 Como botón
<Button
  text="Enviar"
  type="submit"
  icon={faArrowRight}
/>

🔹 Como link
<Button
  text="Ver proyectos"
  to="/projects"
  icon={faArrowRight}
/> */
  }
  const baseClasses =
    "flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition";
  const finalClasses = `${baseClasses} ${className ?? ""}`;
  if (to) {
    return (
      <Link to={to} className={finalClasses}>
        {iconLetf && <FontAwesomeIcon icon={iconLetf} />}
        <span>{text}</span>
        {iconRight && <FontAwesomeIcon icon={iconRight} />}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {iconLetf && <FontAwesomeIcon icon={iconLetf} />}
      <span>{text}</span>
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </button>
  );
};
