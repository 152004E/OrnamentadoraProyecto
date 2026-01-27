import Logo from "../../../assets/LogoRecord.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export const SectionComunication = () => {
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
        <p className="font-semibold text-gray-200/90 text-lg mb-4">
          Creamos soluciones a medida en ornamentación y estructuras metálicas,
          combinando diseño, calidad y funcionalidad para dar vida a proyectos
          únicos y duraderos.
        </p>
        <div className="flex flex-col w-full justify-center items-center gap-3 text-[16px]">
          <Button
            text="Solicitar cotización"
            icon={faWhatsapp}
            to="https://wa.me/573001234567"
            className="bg-white  text-blue-600! uppercase tracking-wider font-bold w-full hover:bg-blue-50"
          />
          <Button
            text="Hablar con un asesor"
            icon={faPhoneFlip}
            to="tel:+573001234567"
            className="bg-transparent text-white border border-white! uppercase tracking-wider font-bold w-full hover:bg-blue-50"
          />
        </div>
      </div>
    </section>
  );
};
