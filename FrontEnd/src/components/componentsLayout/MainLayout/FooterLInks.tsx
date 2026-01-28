import { Link } from "react-router-dom";
interface FooterLInksProps {
  linkText: string;
  to: string;
}

export const FooterLInks = ({ linkText, to }: FooterLInksProps) => {
  return (
    <Link to={to} className="px-3 py-2 w-40 rounded-lg  bg-white hover:text-blue-600">
      {linkText}
    </Link>
  );
};
