import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  return (
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
  );
};
