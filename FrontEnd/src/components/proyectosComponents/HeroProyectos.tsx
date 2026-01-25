import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../componentsLayout/Button";
import { SearchBar } from "../componentsLayout/SearchBar";

export const HeroProyectos = () => {
  return (
    <div>
      <h3 className="text-3xl text-blue-800 font-semibold tracking-wide">
        Proyectos Realizados
      </h3>
      <p className="text-sm my-2 text-gray-500">
        Descubre nuestra experiencia a través de proyectos de ornamentación
        realizados
      </p>
      <SearchBar />
      <div className="flex flex-wrap gap-2 my-4">
        {/* Filtro por estado */}
        <select className="rounded-lg border w-25 border-gray-300 pl-2 py-2 text-sm focus:outline-none transition-all duration-500 focus:ring-2 focus:ring-blue-500">
          <option value="">Estado</option>
          <option value="completado">Completado</option>
          <option value="en-proceso">En proceso</option>
          <option value="planificado">Planificado</option>
        </select>

        {/* Filtro por material */}
        <select className="rounded-lg border border-gray-300 px-2 py-2 text-sm focus:outline-none transition-all duration-500 focus:ring-2 focus:ring-blue-500">
          <option value="">Material</option>
          <option value="hierro">Hierro</option>
          <option value="acero">Acero</option>
          <option value="aluminio">Aluminio</option>
          <option value="madera">Madera</option>
        </select>
        <div className="text-sm ">

          <Button text="Mas filtros" icon={faListCheck}/>
        </div>
        
      </div>
    </div>
  );
};
