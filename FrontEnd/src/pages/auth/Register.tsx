import {
  faUser,
  faCircleUser,
  faEnvelope,
  faLock,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthFooterLink } from "../../components/auth/AuthFooterLink";
import { AuthBackground } from "../../components/auth/AuthBackground";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthCheckbox } from "../../components/auth/AuthCheckbox";

export const Register = () => {
  return (
    <div className=" w-[320px] h-175 rounded-2xl shadow-2x overflow-hidden">
      {/* Bolas difuminadas de fondo */}
      <AuthBackground />

      <main className=" relative flex h-full flex-col items-center rounded-2xl justify-center bg-[#1E3B8A] ">
        <AuthHeader />

        {/* Card del formulario */}
        <div className=" h-full rounded-2xl bg-white flex flex-col w-full  items-center">
          <div className="w-67 mt-5 flex flex-col justify-center items-center">
            <h2 className="text-[28px] tracking-normal font-bold">
              Regístrate
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Crea tu cuenta para empezar
            </p>
            <AuthInput
              label="Nombre completo"
              type="text"
              placeholder="Nombre de tu contacto"
              name="nombre"
              iconLabel={faUser}
              iconInput={faCircleUser}
            />

            <AuthInput
              label="Correo electrónico"
              type="email"
              placeholder="correo@ejemplo.com"
              name="email"
              iconLabel={faEnvelope}
              iconInput={faEnvelope}
            />

            <AuthInput
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              name="password"
              iconLabel={faLock}
              iconInput={faLock}
              rightIcon={faEyeSlash}
            />
            <AuthCheckbox
              name="terms"
              label={
                <>
                  Acepto los{" "}
                  <a
                    href="#"
                    className="text-blue-700 font-medium hover:underline"
                  >
                    Términos y Condiciones
                  </a>{" "}
                  y la{" "}
                  <a
                    href="#"
                    className="text-blue-700 font-medium hover:underline"
                  >
                    Política de Privacidad
                  </a>
                </>
              }
            />

            <AuthButton text="Crear cuenta" icon={faArrowRight} type="submit" />

            <AuthFooterLink
              text="¿Ya tienes una cuenta?"
              linkText="Iniciar sesión"
              to="/login"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
