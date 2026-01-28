import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { HeaderCards } from "./AdminDashComponents/HeaderCards";
import { Button } from "../../componentsLayout/Button";

export const SectionTeam = () => {
  return (
    <article className="  min-w-70  px-6 py-3   rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
      <HeaderCards
        icon={faFolderOpen}
        titulo="Operaciones"
        subtitulo="Control De Proyectos"
      />

      <div className="border border-black my-2"></div>

      <section className="flex justify-between my-4">
        <article className="w-35 ">
          <h4 className="font-black text-2xl">14</h4>
          <p className="text-gray-500 font-semibold text-sm ">En fabricacion</p>
        </article>
        <article className="w-35 ">
          <h4 className="font-black text-2xl">14</h4>
          <p className="text-gray-500 font-semibold text-sm ">En fabricacion</p>
        </article>
      </section>
      <div className="border border-black my-2"></div>
      <Button
        className="px-2! py-2! "
        text="Nuevo Proyecto"
        icon={faFolderPlus}
      />
    </article>
  );
};
