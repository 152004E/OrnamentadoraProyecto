import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StatsCardProps {
  icon: IconProp;
  titulo: string;
  label: string;
}

export const StatCard = ({icon , titulo, label}:StatsCardProps) => {
  return (
    <article className="flex flex-col justify-center items-center bg-white w-23 py-4 rounded-xl shadow-blue-400/50 shadow-sm">
        <FontAwesomeIcon icon={icon} className="text-blue-600 text-xl mr-2" />
        <p className="text-[17px] font-semibold">{titulo}</p>
        <p className="text-[12px] font-semibold text-gray-400">{label}</p>
    </article>
  )
}

