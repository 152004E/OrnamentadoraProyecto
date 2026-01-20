import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  return (
    <div className=" w-[320px] h-175 rounded-xl shadow-2xl">
      <main className="flex h-full flex-col items-center rounded-xl justify-center bg-[#1E3B8A] ">
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
        <div className=" h-full rounded-xl bg-white">
          <h2>Regístrate</h2>
          <p>Crea tu cuenta para empezar</p>

          <label>Nombre completo</label>
          <input type="text" className="border" />

          <label>Correo electrónico</label>
          <input type="email" className="border" />

          <label>Contraseña</label>
          <input type="password" className="border" />

          <button>Crear cuenta</button>

          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="" className="text-blue-700 font-medium">
              Iniciar sesión
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};
