import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../componentsLayout/Button";
import { ProgressBar } from "./AdminDashComponents/ProgressBar";

export const SectionManagerProyects = () => {
  return (
    <article className="  min-w-70  px-6 py-3   rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
      <header className="flex justify-between items-center ">
        <span className="bg-blue-300/40 text-blue-900 p-2 rounded-xl">
          <FontAwesomeIcon icon={faFolderOpen} />
        </span>
        <div>
          <h4 className="font-semibold">Operaciones</h4>
          <p className="text-[11px]">Control De Proyectos</p>
        </div>
        <Button
          text="Gestionar Proyectos"
          className="px-2! py-2! text-[12px]"
        />
      </header>
      <div className="border border-black my-2"></div>

      <section className="flex justify-between my-4">
        <article className="w-35 ">
          <h4 className="font-black text-2xl">14</h4>
          <p className="text-gray-500 font-semibold text-sm ">En fabricacion</p>
          <ProgressBar color="bg-red-500" value={70} />
        </article>
        <article className="w-35 ">
          <h4 className="font-black text-2xl">14</h4>
          <p className="text-gray-500 font-semibold text-sm ">En fabricacion</p>
          <ProgressBar color="bg-green-500" value={20} />
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
