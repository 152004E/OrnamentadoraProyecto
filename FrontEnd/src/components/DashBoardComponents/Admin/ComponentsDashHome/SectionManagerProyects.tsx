import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../componentsLayout/Button";
import { ProgressBar } from "../AdminDashComponents/Home/ProgressBar";
import { HeaderCards } from "../AdminDashComponents/Home/HeaderCards";

export const SectionManagerProyects = () => {
  return (
    <article className=" min-w-70  px-6 py-3   rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
      <HeaderCards
        tituloBoton="Gestionar Proyectos"
        icon={faFolderOpen}
        titulo="Operaciones"
        subtitulo="Control De Proyectos"
        classBoton="px-2! py-2! text-[12px]"
      />

      <div className="border border-black my-2"></div>

      <section className="flex justify-between my-4 gap-3">
        <article className="w-32 ">
          <h4 className="font-semiboldbold text-4xl">14</h4>
          <p className="text-gray-500 font-semibold text-sm ">En fabricacion</p>
          <ProgressBar color="bg-red-500" value={70} />
        </article>
        <div className="border border-gray-300 my-2"></div>
        <article className="w-32 ">
          <h4 className="font-semiboldbold text-4xl">7</h4>
          <p className="text-gray-500 font-semibold text-sm ">
            Pendientes Entrega
          </p>
          <ProgressBar color="bg-green-500" value={20} />
        </article>
      </section>
      <div className="border border-black my-2"></div>
      <Button
        className="px-4! font-semibold py-1.5! "
        text="Nuevo Proyecto"
        iconRight={faFolderPlus}
      />
    </article>
  );
};
