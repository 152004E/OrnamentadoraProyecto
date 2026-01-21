import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export const HeroSection = () => {
  return (
    <section id="home" className="w-full px-6 py-16 flex flex-col items-center text-center bg-white ">
      <h1 className="text-4xl font-bold text-blue-500/90 mb-4">
        Diseñamos y fabricamos ornamentos a tu medida
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        Transformamos tus ideas en piezas únicas para interiores y exteriores.
        Calidad, diseño y detalle en cada proyecto.
      </p>

      <div className="flex gap-4">
        <Button text="Ver Proyectos " icon={faFolderOpen} type="submit" />

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Contáctanos
        </button>
      </div>
    </section>
  );
};
