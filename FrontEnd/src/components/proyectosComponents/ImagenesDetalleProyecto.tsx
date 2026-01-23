import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rejaProyecto from "../../assets/rejaProyecto.jpg";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const ImagenesDetalleProyecto = () => {
  return (
    <div className="flex flex-col gap-3 p-6">
      <p className="flex items-center py-2 justify-center rounded-xl shadow-blue-200 shadow-2xl w-full gap-2 bg-blue-200/60 text-blue-700 font-semibold">
        <FontAwesomeIcon icon={faCircleCheck} />
        Proyecto finalizado con éxito
      </p>

      <img
        src={rejaProyecto}
        alt=""
        className="rounded-2xl shadow-blue-200 shadow-2xl w-90"
      />

      <div className="flex  gap-6 flex-wrap">
        <img
          src={rejaProyecto}
          alt=""
          className="rounded-2xl shadow-blue-200 shadow-2xl w-20"
        />
        <img
          src={rejaProyecto}
          alt=""
          className="rounded-2xl shadow-blue-200 shadow-2xl w-20"
        />
        <img
          src={rejaProyecto}
          alt=""
          className="rounded-2xl shadow-blue-200 shadow-2xl w-20"
        />
        <img
          src={rejaProyecto}
          alt=""
          className="rounded-2xl shadow-blue-200 shadow-2xl w-20"
        />
      </div>
    </div>
  );
};
