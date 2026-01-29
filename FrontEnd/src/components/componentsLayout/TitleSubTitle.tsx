import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TitleSubTitleProps {
  icon?: IconDefinition;
  title?: string;
  subTitle?: string;
  classTitle?: string;
  classSubTitle?: string;
}

export const TitleSubTitle = ({
  title,
  subTitle,
  classTitle = "",
  classSubTitle = "",
  icon,
}: TitleSubTitleProps) => {
  const titleClasses = `font-bold  ${classTitle}`;
  const subTitleClasses = `text-gray-500 ${classSubTitle}`;

  return (
    <div>
      <div className="flex items-center gap-2 ">
        {icon && <FontAwesomeIcon icon={icon} className="text-blue-600" />}
        {title && <h3 className={titleClasses}>{title}</h3>}
      </div>

      {subTitle && <p className={subTitleClasses}>{subTitle}</p>}
    </div>
  );
};
