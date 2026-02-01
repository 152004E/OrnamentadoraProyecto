import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../assets/wlSinFondo.png";
import { HeaderCards } from "../AdminDashComponents/Home/HeaderCards";

export const SectionTeam = () => {
  return (
    <article className="  min-w-70  px-6 py-3   rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
      <HeaderCards
        tituloBoton="Gestionar Equipo"
        icon={faFolderOpen}
        titulo="Equipo"
        subtitulo="Equipo y Roles"
        classBoton="px-2! py-2! text-[12px]"
      />

      <div className="border border-black my-2"></div>

      <section className="flex flex-col gap-2 w-70  my-4">
        <figure className="flex w-full items-center gap-2">
          <img
            src={logo}
            alt="Logo WL Ornamentación y Aluminio"
            className="w-11 h-11 object-contain bg-blue-600/30 rounded-full"
          />

          <figcaption className="flex w-full justify-between   items-center">
            <div className="">
              <p className="font-semibold">William arias</p>
              <p className="text-sm font-semibold text-gray-400">
                Fundador & CEO
              </p>
            </div>
            <span>
              <p className="text-[12px] py-1 px-2 tracking-wide font-bold   flex justify-center items-center bg-blue-600/20 rounded-2xl text-blue-800 ">
                ACTIVO
              </p>
            </span>
          </figcaption>
        </figure>
        <figure className="flex w-full items-center gap-2">
          <img
            src={logo}
            alt="Logo WL Ornamentación y Aluminio"
            className="w-11 h-11 object-contain bg-blue-600/30 rounded-full"
          />

          <figcaption className="flex w-full justify-between   items-center">
            <div className="">
              <p className="font-semibold">Eduar Reyes</p>
              <p className="text-sm font-semibold text-gray-400">
                Ayudante Auxiliar
              </p>
            </div>
            <span>
              <p className="text-[12px] py-1 px-2 tracking-wide font-bold   flex justify-center items-center bg-blue-600/20 rounded-2xl text-blue-800 ">
                ACTIVO
              </p>
            </span>
          </figcaption>
        </figure>
      </section>
      <div className="border border-black my-2"></div>
      <p className="text-sm italic text-gray-400 tracking-wide text-center">
        7 Intigrantes en el Equipo WL
      </p>
    </article>
  );
};
