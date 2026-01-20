import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faUser,
  faCircleUser,
  faEnvelope,
  faLock,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export const Register = () => {
  return (
    <div className=" w-[320px] h-175 rounded-2xl shadow-2x overflow-hidden">
      {/* Bolas difuminadas de fondo */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute top-10 -right-24 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-blue-500 rounded-full blur-3xl opacity-60"></div>

      <main className=" relative flex h-full flex-col items-center rounded-2xl justify-center bg-[#1E3B8A] ">
        <section className="flex flex-col p-3 justify-center items-center text-white">
          {/* Logo + Marca */}
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className="text-[24px] text-white border rounded-full px-3 py-4 shadow-inner shadow-white mb-2"
          />
          <h3 className="text-2xl tracking-wider font-bold mb-2">ORN-ARIAS</h3>
          <p className="text-sm text-gray-400">
            Transformamos tus ideas en realidad
          </p>
        </section>

        {/* Card del formulario */}
        <div className=" h-full rounded-2xl bg-white flex flex-col w-full  items-center">
          <div className="w-67 mt-5 flex flex-col justify-center items-center">
            <h2 className="text-[28px] tracking-normal font-bold">
              Regístrate
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Crea tu cuenta para empezar
            </p>

            <div className="flex flex-col w-full  relative ">
              <label className="text-gray-600 text-sm mb-2">
                <FontAwesomeIcon icon={faUser} /> Nombre Completo
              </label>

              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-gray-400 absolute bottom-7 left-2 text-[17px]"
              />
              <input
                type="text"
                className="border py-2 rounded-lg mb-4 text-black pl-9 text-[15px] bg-gray-300/20 duration-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Nombre de tu contacto"
                name="nombre"
                required
              />
            </div>

            <div className="flex flex-col w-full relative">
              <label className="text-gray-600 text-sm mb-2">
                <FontAwesomeIcon icon={faEnvelope} /> Correo electrónico
              </label>

              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 absolute bottom-6.5 left-2 text-[16px]"
              />

              <input
                type="email"
                className="border py-2 rounded-lg mb-4 text-black pl-10 text-[15px] bg-gray-300/20 duration-500 transition-all  focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="correo@ejemplo.com"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col w-full relative">
              <label className="text-gray-600 text-sm mb-2">
                <FontAwesomeIcon icon={faLock} /> Contraseña
              </label>

              <FontAwesomeIcon
                icon={faLock}
                className="text-gray-400 absolute bottom-9 left-2 text-[16px]"
              />

              <input
                type="password"
                className="border py-2 rounded-lg mb-6 text-black pl-10 text-[15px] bg-gray-300/20 duration-500 transition-all  focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="••••••••"
                name="password"
                required
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-gray-400 absolute bottom-9 right-3 text-[16px]"
              />
            </div>

            <button className="bg-blue-600 w-full rounded-lg text-white flex gap-2 justify-center items-center py-3 mb-5">
              Crear cuenta
              <FontAwesomeIcon icon={faArrowRight} />
            </button>

            <p className="flex flex-col justify-center items-center">
              ¿Ya tienes una cuenta?{" "}
              <a href="" className="text-blue-700 font-medium">
                Iniciar sesión
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
