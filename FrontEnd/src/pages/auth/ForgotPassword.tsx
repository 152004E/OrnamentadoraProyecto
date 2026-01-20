import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AuthBackground } from "../../components/auth/AuthBackground";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthButton } from "../../components/auth/AuthButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { AuthFooterLink } from "../../components/auth/AuthFooterLink";
export const ForgotPassword = () => {
  return (
    <div className=" w-[320px] h-175 rounded-2xl shadow-2x overflow-hidden">
      {/* Bolas difuminadas de fondo */}
      <AuthBackground />

      <main className=" relative flex h-full flex-col items-center rounded-2xl justify-center bg-[#1E3B8A] ">
        <AuthHeader />

        {/* Card del formulario */}
        <div className=" h-full rounded-2xl bg-white flex flex-col w-full  items-center">
          <div className="w-67 mt-5 flex flex-col justify-center items-center">
            <h2 className="text-[28px] tracking-normal font-bold text-center">
              Recuperación de contraseña
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

            <AuthButton text="Enviar " icon={faArrowRight} type="submit" />
            <a
              className="text-[#2563EB] text-sm font-medium hover:underline transition-all"
              href="#"
            >
              ¿Necesitas ayuda? Contacta con soporte
            </a>
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
