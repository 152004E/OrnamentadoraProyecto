import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RequiredArticleProps {
  icon: IconDefinition;
  body: string;
}
export const RequiredArticle = ({ body, icon }: RequiredArticleProps) => {
  return (
    <article className="flex justify-start items-center gap-2">
      {icon && <FontAwesomeIcon icon={icon} className="text-blue-500" />}
      <p>{body}</p>
    </article>
  );
};
