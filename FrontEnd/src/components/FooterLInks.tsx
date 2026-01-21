import { Link } from "react-router-dom";
interface FooterLInksProps {
  linkText: string;
  to: string;
}

export const FooterLInks = ({ linkText, to }: FooterLInksProps) => {
  return (
    <Link to={to} className="hover:text-blue-600">
      {linkText}
    </Link>
  );
};
