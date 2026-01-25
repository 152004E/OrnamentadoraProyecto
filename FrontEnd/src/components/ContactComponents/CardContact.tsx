import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface CardContactProps {
  title: string;
  icon: IconProp;
  context: string;
}
export const CardContact = ({ icon, title, context }: CardContactProps) => {
  return (
    <article className="flex gap-5">
      <p>
        <FontAwesomeIcon
          icon={icon}
          className="px-2 py-3 rounded-lg text-white bg-blue-600/80"
        />
      </p>
      <div>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className=" text-[14px]">{context}</p>
      </div>
    </article>
  );
};
