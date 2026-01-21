import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectCard } from "../../components/ProjectCard";
import { HeroProyectos } from "../../components/proyectosComponents/HeroProyectos";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ProyectosRealizados = () => {
  return (
    <section className="p-5">
      <HeroProyectos />

      <ProjectCard />

      <div className="w-full flex justify-center">
        <a
          href="/proyectos"
          className="mt-9 text-blue-600 text-xl font-semibold uppercase"
        >
          Ver Mas proyecto <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
};
