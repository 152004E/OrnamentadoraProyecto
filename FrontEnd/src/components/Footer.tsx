import { FooterLInks } from "./FooterLInks";

export const Footer = () => {
  return (
    <footer className="w-full border-t rounded-2xl bg-blue-200/60 mt-10">
      <div className="p-6 flex flex-col justify-center items-center">
        {/* Branding */}
        <div className="flex flex-col justify-between items-center">
          <h3 className="text-[22px]  font-bold text-blue-700 mb-1">
            Orn-Arias
          </h3>
          <p className="text-[15px] text-center text-gray-500 p-3">
            Soluciones en infraestructura y proyectos modernos. Transformamos
            espacios con elegancia y funcionalidad
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <FooterLInks to="/#home" linkText="inicio" />
          <FooterLInks to="/ForgotPassword" linkText="Proyectos" />
          <FooterLInks to="/login" linkText="Iniciar Sesion" />
          <FooterLInks to="/register" linkText="Registrarse" />
   
        </div>
      </div>
      <div className="bg-blue-800">
        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} OrnArias. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
