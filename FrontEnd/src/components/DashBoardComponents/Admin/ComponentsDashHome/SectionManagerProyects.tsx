import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../componentsLayout/Button";
import { HeaderCards } from "../AdminDashComponents/Home/HeaderCards";
import { SectionProjectsStatus } from "../SectionProjectsStatus";

export const SectionManagerProyects = () => {
  return (
    <article className=" min-w-70  px-6 py-3   rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
      <HeaderCards
        tituloBoton="Gestionar Proyectos"
        icon={faFolderOpen}
        titulo="Operaciones"
        subtitulo="Control De Proyectos"
        classBoton="px-2! py-2! text-[12px]"
        to="/ManejoProyectos"
      />

      <div className="border border-black my-2"></div>

      <SectionProjectsStatus/>
      <div className="border border-black my-2"></div>
      <Button
        className="px-4! font-semibold py-1.5! "
        text="Nuevo Proyecto"
        iconRight={faFolderPlus}
      />
    </article>
  );
};
