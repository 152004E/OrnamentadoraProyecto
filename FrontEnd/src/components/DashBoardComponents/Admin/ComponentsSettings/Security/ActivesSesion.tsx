import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ActivesSesion = () => {
  return (
    <section className=" border border-gray-400 rounded-xl bg-gray-100 overflow-hidden my-3">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4 border-b border-gray-400 bg-linear-to-r  from-blue-700/90  to-blue-400/90  p-4 ">
        <FontAwesomeIcon icon={faHouseLaptop} />
        Gestión de Acceso
      </h3>
      <div className="px-3">
        <article>
          <span></span>
          <div>
            <p></p> <p></p>
          </div>
          <button>Cerrar Sesión</button>
        </article>
      </div>
    </section>
  );
};
