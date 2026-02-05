import {
    faComputer,
  faHouseLaptop,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ActivesSesion = () => {
  return (
    <section className=" border border-gray-400 rounded-xl bg-gray-100 overflow-hidden my-3">
      <h3 className="flex justify-between items-center gap-2 text-lg font-semibold text-white border-b border-gray-400 bg-linear-to-r  from-blue-700/90  to-blue-400/90  p-4 ">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHouseLaptop} />
          Sesiones Activas
        </p>
        <span className="flex ">
          <p className="text-[12px] uppercase py-1 px-2 tracking-wide font-bold   bg-white rounded-2xl text-blue-800 ">
            2 Activas
          </p>
        </span>
      </h3>

      <div className="p-3 flex flex-col gap-3">
        <article className="border border-gray-300 rounded-lg bg-gray-200/90 flex justify-around items-center  py-1">
          <div className="flex justify-start items-center gap-3">
            <span className="border-gray-400 border bg-blue-600/40 text-white rounded-lg">
              <FontAwesomeIcon icon={faMobileScreen} />
            </span>
            <div>
              <p className="text-sm font-bold ">IPhone 12</p>{" "}
              <p className="text-[12px]"> Bogota CO * Actual</p>
            </div>
          </div>
          <button className="text-red-700 font-semibold text-sm">
            Cerrar Sesión
          </button>
        </article>
        <article className="border border-gray-300 rounded-lg bg-gray-200/90 flex justify-around items-center py-1">
          <div className="flex justify-start items-center gap-3">
            <span className="border-gray-400 px-1 border bg-blue-600/40 text-white rounded-lg">
              <FontAwesomeIcon icon={faComputer} />
            </span>
            <div>
              <p className="text-sm font-bold ">Chrome windows</p>{" "}
              <p className="text-[12px]"> Medellin CO * hace 2 horas</p>
            </div>
          </div>
          <button className="text-red-700 font-semibold text-sm">
            Cerrar Sesión
          </button>
        </article>
      </div>
      <div className="flex justify-center items-center py-5" >
        <button className="text-gray-500 font-semibold text-sm">
          Cerrar todas las Sesión
        </button>
      </div>
    </section>
  );
};
