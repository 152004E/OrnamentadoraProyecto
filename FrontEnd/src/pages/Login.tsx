import {
  faEnvelope,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { AuthBackground } from "../components/auth/AuthBackground";
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthInput } from "../components/auth/AuthInput";
import { AuthButton } from "../components/auth/AuthButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { AuthFooterLink } from "../components/auth/AuthFooterLink";

export const Login = () => {
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
              Bienvenido
            </h2>
            <p className="text-sm text-gray-500 mb-4">
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
