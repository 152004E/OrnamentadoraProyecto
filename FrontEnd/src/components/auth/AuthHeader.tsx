import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AuthHeader = () => {
  return (
    <section className="flex flex-col p-3 justify-center items-center text-white">
      {/* Logo + Marca */}
      <FontAwesomeIcon
        icon={faScrewdriverWrench}
        className="text-[24px] text-white border rounded-full px-3 py-4 shadow-inner shadow-white mb-2"
      />
      <h3 className="text-2xl tracking-wider font-bold mb-2">ORN-ARIAS</h3>
      <p className="text-sm text-gray-400">
        Transformamos tus ideas en realidad
      </p>
    </section>
  );
};
