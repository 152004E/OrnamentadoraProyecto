import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ValoresNosotros = () => {
  return (
    <section className="flex flex-col gap-3 bg-gray-100 p-6">
      <h3 className="font-semibold text-black text-lg">Nuestros Valores</h3>
      <article>
        <p className="flex items-center py-2 px-2 border justify-baseline rounded-xl  w-full gap-2 bg-white text-blue-700 font-semibold">
          <FontAwesomeIcon icon={faCircleCheck} />
          Excelencia en cada detalle
        </p>
      </article>
      <article>
        <p className="flex items-center py-2 px-2 border justify-baseline rounded-xl  w-full gap-2 bg-white text-blue-700 font-semibold">
          <FontAwesomeIcon icon={faCircleCheck} />
          Compormiso Inquebrantable
        </p>
      </article>
      <article>
        <p className="flex items-center py-2   px-2 border justify-beseline rounded-xl  w-full gap-2 bg-white text-blue-700 font-semibold">
          <FontAwesomeIcon icon={faCircleCheck} />
          Diseño y funcionalidad
        </p>
      </article>
    </section>
  );
};
