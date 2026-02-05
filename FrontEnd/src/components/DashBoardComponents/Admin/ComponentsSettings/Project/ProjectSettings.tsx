import { useState } from "react";
import { Switch } from "./Switch";
import { TitleSubTitle } from "../../../../componentsLayout/TitleSubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export const ProjectSettings = () => {
  const [comments, setComments] = useState(true);
  const [likes, setLikes] = useState(true);
  const [featured, setFeatured] = useState(false);

  return (
    <section className="border border-gray-300 rounded-xl bg-white overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center  text-lg font-semibold text-white border-b border-gray-400 bg-linear-to-r  from-blue-700/90  to-blue-400/90  p-4 ">
      <FontAwesomeIcon icon={faFolderOpen} />
        <h3 className="font-semibold text-[16px] ">Configuración de Proyectos</h3>
        <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded-full font-bold">
          ACTIVO
        </span>
      </div>

      {/* BODY */}
      <div className="p-4 space-y-5">
        {/* Comentarios */}
        <div className="flex justify-between items-center">
          <TitleSubTitle
            title="Habilitar comentarios"
            subTitle="Permitir que clientes comenten en obras"
            classTitle="font-semibold text-gray-900"
            classSubTitle="text-sm text-gray-500"
          />
          <Switch checked={comments} onChange={setComments} />
        </div>

        {/* Likes */}
        <div className="flex justify-between items-center">
          <TitleSubTitle
            title="Permitir likes"
            subTitle="Habilitar reacciones de clientes"
            classTitle="font-semibold text-gray-900"
            classSubTitle="text-sm text-gray-500"
          />
          <Switch checked={likes} onChange={setLikes} />
        </div>

        {/* Destacados */}
        <div className="flex justify-between items-center">
          <TitleSubTitle
            title="Proyectos destacados"
            subTitle="Mostrar en la página de inicio"
            classTitle="font-semibold text-gray-900"
            classSubTitle="text-sm text-gray-500"
          />
          <Switch checked={featured} onChange={setFeatured} />
        </div>
        <div className="flex flex-col justify-between items-center border-t border-gray-400/40 pt-4">
          <TitleSubTitle
            title="Orden visual"
            subTitle="Define cómo se muestran los proyectos en la lista"
            classTitle="font-semibold text-gray-900 text-sm"
            classSubTitle="text-sm text-gray-500 mb-3"
          />

          <select className="w-full py-2 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="recent">Más recientes primero</option>
            <option value="oldest">Más antiguos primero</option>
            <option value="az">Orden alfabético (A–Z)</option>
            <option value="za">Orden alfabético (Z–A)</option>
          </select>
        </div>
      </div>

      
    </section>
  );
};
