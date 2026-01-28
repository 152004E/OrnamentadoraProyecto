import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../componentsLayout/Button";
interface HeaderCardsProps {
  icon: IconDefinition;
  titulo: string;
  subtitulo: string;
}
export const HeaderCards = ({ icon, titulo, subtitulo }: HeaderCardsProps) => {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex justify-center items-center gap-3">
        <span className="bg-blue-300/40 text-blue-900 p-2 rounded-xl">
          <FontAwesomeIcon icon={icon} />
        </span>
        <div>
          <h4 className="font-semibold">{titulo}</h4>
          <p className="text-[11px]">{subtitulo}</p>
        </div>
      </div>
      <Button text="Gestionar Proyectos" className="px-2! py-2! text-[12px]" />
    </header>
  );
};
