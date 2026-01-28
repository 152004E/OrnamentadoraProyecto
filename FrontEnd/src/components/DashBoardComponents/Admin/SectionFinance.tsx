import { DashStadCard } from "./AdminDashComponents/DashStadCard";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
export const SectionFinance = () => {
  return (
    <section className=" my-7 flex flex-col gap-4 ">
      <DashStadCard
        titulo="Ingresos Totales"
        subTitulo="Este mes"
        monto="$42.000,000"
        className=" bg-linear-to-r  from-blue-700/90  to-blue-400/90"
        icon={faArrowTrendUp}
        iconButton={faArrowUpRightFromSquare}
      />
      <DashStadCard
        titulo="Egresos Totales"
        subTitulo="Gastos operativos"
        monto="$42.000,000"
        className="bg-linear-to-r  from-black/90  to-gray-700/90"
        icon={faArrowTrendDown}
        iconButton={faArrowUpRightFromSquare}
      />
    </section>
  );
};
