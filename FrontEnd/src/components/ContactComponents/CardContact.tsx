import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleSubTitle } from "../componentsLayout/TitleSubTitle";
interface CardContactProps {
  title?: string;
  icon: IconProp;
  subTitle?: string;

}
export const CardContact = ({
  icon,
  title,
  subTitle,

}: CardContactProps) => {
  return (
    <article className="flex gap-5">
      <p>
        <FontAwesomeIcon
          icon={icon}
          className="px-2 py-3 rounded-lg text-white bg-blue-600/80"
        />
      </p>
      <div>
        <TitleSubTitle
          title={title}
          subTitle={subTitle}

        />
      </div>
    </article>
  );
};
