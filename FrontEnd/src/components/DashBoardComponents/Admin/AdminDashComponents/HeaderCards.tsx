import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../componentsLayout/Button";
interface HeaderCardsProps {
  icon: IconDefinition;
  iconBoton?: IconDefinition;
  titulo: string;
  subtitulo: string;
  tituloBoton : string
  classBoton? : string
  classIcon ?: string
}
export const HeaderCards = ({ icon, titulo, subtitulo ,tituloBoton ,iconBoton ,classBoton,classIcon }: HeaderCardsProps) => {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex justify-center items-center gap-3">
        <span className="bg-blue-300/40 text-blue-900 p-2 rounded-xl">
          <FontAwesomeIcon icon={icon} className={classIcon}/>
        </span>
        <div>
          <h4 className="font-semibold">{titulo}</h4>
          <p className="text-[11px]">{subtitulo}</p>
        </div>
      </div>
      <Button text={tituloBoton} className={classBoton} icon={iconBoton} />
    </header>
  );
};
