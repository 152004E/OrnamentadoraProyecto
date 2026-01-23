import heroNosotros from "../../assets/hero.jpg";
export const HeroNosotros = () => {
  return (
    <section
      className="relative w-full h-60  px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroNosotros})` }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative text-white mt-15">
        <p className="px-3 py-1 rounded-xl bg-blue-700 w-30 tracking-wide font-black text-[10px]">
          SOBRE NOSOTROS
        </p>
        <h3 className="text-2xl font-black mb-2 ">Nuestra Historia</h3>
        <p className="text-gray-300 text-sm">
          Forjando le futuro con acero y dedicación desde 2018
        </p>
      </div>
    </section>
  );
};
