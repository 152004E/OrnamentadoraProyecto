import {
  faEnvelope,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { AuthBackground } from "../../components/auth/AuthBackground";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthButton } from "../../components/auth/AuthButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { AuthFooterLink } from "../../components/auth/AuthFooterLink";
import { AuthCheckbox } from "../../components/auth/AuthCheckbox";

export const Login = () => {
  return (
    <div className="relative w-[320px] h-175 rounded-2xl shadow-2x">
      {/* Bolas difuminadas de fondo */}
      <AuthBackground />

      <main className=" relative flex h-full flex-col items-center rounded-2xl justify-center bg-[#1E3B8A] ">
        <AuthHeader />

        {/* Card del formulario */}
        <div className=" h-full rounded-2xl bg-white flex flex-col w-full  items-center">
          <div className="w-67 mt-5 flex flex-col justify-center items-center">
            <h2 className="text-[28px] tracking-normal font-bold">
              Bienvenido
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Ingresa tus datos para continuar
            </p>

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
            <div className="flex w-full justify-end mb-4">
              <a
                href="/ForgotPassword"
                className="text-blue-700 text-[12px] font-medium"
              >
                ¿Olvidaste tu Contraseña?
              </a>
            </div>
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

            <AuthButton text="Ingresar" icon={faArrowRight} type="submit" />

            <AuthFooterLink
              text="¿No tienes una cuenta?"
              linkText="Registrarse"
              to="/register"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
