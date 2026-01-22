import logoRecord from "../../assets/wlSinFondo.png";

export const AuthHeader = () => {
  return (
    <section className="flex flex-col p-3 justify-center items-center text-white">
      {/* Logo + Marca */}
      <img src={logoRecord} alt="" className="w-17" />
      <h3 className="text-xl text-center tracking-wider font-bold mb-2">
        WL ORNAMENTACIÓN <br /> & ALUMINIO S . A
      </h3>
      <p className="text-sm text-gray-400">
        Transformamos tus ideas en realidad
      </p>
    </section>
  );
};
