import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  text: string;
  icon?: IconDefinition;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  to,
  text,
  type,
  icon,
  onClick,
  disabled,
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
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        <span>{text}</span>
        {icon && <FontAwesomeIcon icon={icon} />}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      <span>{text}</span>

      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};
