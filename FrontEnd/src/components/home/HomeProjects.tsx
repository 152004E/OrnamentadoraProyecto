import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectCard } from "../ProjectCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const HomeProjects = () => {
  return (
    <main className="w-full px-6 py-16 flex flex-col items-center text-center bg-white ">
      <div className="flex flex-col justify-center items-center mb-7">
        <h2 className="text-2xl font-bold text-blue-500/90 mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-gray-600">
          Una selección de proyectos que reflejan mi experiencia en diseño,
          desarrollo y soluciones creativas. Cada uno representa un reto único y
          un enfoque orientado a resultados.
        </p>
      </div>
      <ProjectCard />
      <a
        href="/proyectos"
        className="mt-9 text-blue-600 text-xl font-semibold uppercase"
      >
        Ver proyecto <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </main>
  );
};
