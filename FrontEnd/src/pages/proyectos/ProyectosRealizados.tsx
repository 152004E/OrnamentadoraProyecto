import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeroProyectos } from "../../components/componentsLayout/proyectosComponents/HeroProyectos";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectCard } from "../../components/componentsLayout/proyectosComponents/ProjectCard";

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
