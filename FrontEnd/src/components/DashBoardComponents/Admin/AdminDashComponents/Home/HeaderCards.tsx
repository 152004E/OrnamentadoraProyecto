import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../componentsLayout/Button";
import { TitleSubTitle } from "../../../../componentsLayout/TitleSubTitle";
interface HeaderCardsProps {
  icon: IconDefinition;
  iconBoton?: IconDefinition;
  titulo: string;
  subtitulo: string;
  tituloBoton: string;
  classBoton?: string;
  classIcon?: string;
  classSubTitle? : string
  to ?: string
}
export const HeaderCards = ({
  icon,
  titulo,
  subtitulo,
  tituloBoton,
  iconBoton,
  classBoton,
  classIcon,
  classSubTitle,
  to 
}: HeaderCardsProps) => {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex justify-center items-center gap-3">
        <span className="bg-blue-300/40 text-blue-900 p-2 rounded-xl">
          <FontAwesomeIcon icon={icon} className={classIcon} />
        </span>
        <div>
          <TitleSubTitle
            title={titulo}
            subTitle={subtitulo}
            classTitle="font-semibold text-base!"
            classSubTitle={`text-[11px]! ${classSubTitle} `}
          />
        </div>
      </div>
      <Button text={tituloBoton} className={classBoton} icon={iconBoton} to={to} />
    </header>
  );
};
