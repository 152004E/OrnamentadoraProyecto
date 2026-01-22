import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/LogoRecord.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

export const HomeComunication = () => {
  return (
    <section
      className="relative w-full px-6 py-16 rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${Logo})` }}
    >
      <div className="absolute inset-0 bg-blue-700/90 rounded-2xl"></div>

      <div className="relative z-10 text-white ">
        <h2 className="font-bold tracking-wider text-3xl mb-4">
          Lleva tu próximo proyecto al siguiente nivel.
        </h2>
        <p className="font-semibold text-gray-100/60 text-lg mb-4">
          Creamos soluciones a medida en ornamentación y estructuras metálicas,
          combinando diseño, calidad y funcionalidad para dar vida a proyectos
          únicos y duraderos.
        </p>
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <button className="flex justify-center items-center gap-1 border bg-white uppercase tracking-wider font-bold w-full text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Solicitar cotización
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl " />
          </button>
          <button className="flex justify-center items-center gap-2 border border-white w-full text-white uppercase tracking-wider font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Hablar con un asesor
            <FontAwesomeIcon icon={faPhoneFlip} className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};
