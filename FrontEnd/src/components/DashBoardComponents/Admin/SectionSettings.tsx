import { faGear, faSliders } from "@fortawesome/free-solid-svg-icons";
import { HeaderCards } from "./AdminDashComponents/HeaderCards";

export const SectionSettings = () => {
  return (
    <article className="  min-w-70  px-6 py-3 text-white bg-linear-to-r  from-blue-700/90  to-blue-400/90  rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
      <HeaderCards
        tituloBoton=""
        iconBoton={faSliders}
        icon={faGear}
        titulo="Sistema"
        subtitulo="Ajustes Generales"
        classBoton="px-2! py-2! text-[20px] gap-0!"
        classIcon="text-white!"
        classSubTitle="text-white"
      />
    </article>
  );
};
