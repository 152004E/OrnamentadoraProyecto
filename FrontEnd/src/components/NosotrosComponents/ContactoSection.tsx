import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/wlSinFondo.png";
import { Button } from "../componentsLayout/Button";
import { TitleSubTitle } from "../componentsLayout/TitleSubTitle";
export const ContactoSection = () => {
  return (
    <section>
      <header className="flex justify-between p-6">
        <h2 className="font-bold tracking-wide">Nuestro Equipo</h2>
        <button className="font-semibold text-blue-800 tracking-wide">
          Ver Todos
        </button>
      </header>
      <div className="flex px-6 gap-4">
        <figure className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Logo WL Ornamentación y Aluminio"
            className="w-15 h-15 object-contain bg-blue-600/30 rounded-full"
          />

          <figcaption className="flex flex-col items-center">
            <TitleSubTitle
              title="William Arias"
              subTitle="Fundador & CEO"
              classTitle="font-semibold! text-lg!"
              classSubTitle="text-sm! font-semibold! text-gray-400!"
            />
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Logo WL Ornamentación y Aluminio"
            className="w-15 h-15 object-contain bg-blue-600/30 rounded-full"
          />

          <figcaption className="flex flex-col items-center">
            <TitleSubTitle
              title="Eduar Reyes"
              subTitle="Ayudante Auxiliar"
              classTitle="font-semibold! text-lg!"
              classSubTitle="text-sm! font-semibold! text-gray-400!"
            />
          </figcaption>
        </figure>
      </div>
      <div className="flex justify-center items-center mt-6 pt-6 px-6 font-bold tracking-wide border-t border-gray-200">
        <Button
          text="Contáctanos"
          icon={faArrowRight}
          to="/contacto"
          className="w-full"
        />
      </div>
    </section>
  );
};
