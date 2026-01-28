import type { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../componentsLayout/Button";

interface DashStadCardProps {
  titulo: string;
  subTitulo: string;
  monto: string;
  className?: string;
  icon: IconProp;
  iconButton : IconDefinition
}

export const DashStadCard = ({
  titulo,
  subTitulo,
  monto,
  className,
  icon,
  iconButton
}: DashStadCardProps) => {
    const baseClasses = "min-w-70  px-6 py-3  rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]" 
    const finalClasses = `${baseClasses} ${className ?? ""}`;
  return (
    <article className={finalClasses}>
      <div className="pb-4">
        <h3 className="text-xl text-white font-semiboldbold tracking-wide">
          {titulo}
        </h3>
        <p className="text-[12px] py-1 font-medium  min-w-15 max-w-30 flex justify-center items-center bg-blue-600 rounded-2xl text-gray-400  mt-1">
          {subTitulo}
        </p>
      </div>
      <p className="text-3xl text-white font-bold tracking-tight pb-6">
        {monto}
      </p>
      {icon && (
        <FontAwesomeIcon
          className="absolute top-3 right-4 text-white/50 text-7xl"
          icon={icon}
        />
      )}
      <div className="border border-white my-2"></div>
      <Button
        text="Ver Detalle"
        className="bg-white text-blue-700! py-2! font-bold "
        icon={iconButton}
      />
    </article>
  );
};
