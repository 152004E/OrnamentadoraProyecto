import { faBuildingShield, faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons"
import { StatCard } from "./StatCard"

export const StatsSection = () => {
  return (
     <div className="flex justify-around items-center">
      <StatCard icon={faClock} titulo="8+" label="AÑOS" />
      <StatCard icon={faBuildingShield} titulo="100+" label="PROYECTOS" />
      <StatCard icon={faCircleCheck} titulo="100%" label="CALIDAD" />
    </div>
  )
}

