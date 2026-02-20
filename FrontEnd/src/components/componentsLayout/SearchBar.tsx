import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

export const SearchBar = () => {
  return (
    <section>
      <div className="w-full max-w-md relative">
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
      <div className="flex flex-wrap gap-2 my-4">
              {/* Filtro por estado */}
              <select className="rounded-lg border w-27 border-gray-300 pl-2 py-2 text-sm focus:outline-none transition-all duration-500 focus:ring-2 focus:ring-blue-500">
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
                <Button text="Mas filtros" className="px-3!" iconRight={faListCheck} />
              </div>
            </div>
    </section>
  );
};
