import { Link } from "react-router-dom";

interface AuthFooterLinkProps {
  text?: string;
  linkText: string;
  to: string;
}

export const AuthFooterLink = ({
  text,
  linkText,
  to,
}: AuthFooterLinkProps) => { 
  return (
    <p className="flex w-full gap-2  text-[14px] justify-center items-center mt-4">
      {text}{" "}
      <Link to={to} className="text-blue-700 font-medium">
        {linkText}
      </Link>
    </p>
  );
};