import { Link } from "react-router-dom";

interface AuthFooterLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export const AuthFooterLink = ({
  text,
  linkText,
  to,
}: AuthFooterLinkProps) => {
  return (
    <p className="flex flex-col justify-center items-center">
      {text}{" "}
      <Link to={to} className="text-blue-700 font-medium">
        {linkText}
      </Link>
    </p>
  );
};