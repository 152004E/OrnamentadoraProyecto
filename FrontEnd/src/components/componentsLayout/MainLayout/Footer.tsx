import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FooterLInks } from "./FooterLInks";

export const Footer = () => {
  return (
    <footer className="w-full border-t rounded-2xl bg-blue-200/60 mt-10">
      <div className="p-6 flex flex-col justify-center items-center">
        {/* Branding */}
        <div className="flex flex-col justify-between items-center">
          <h3 className="text-[22px]  font-bold text-blue-700 mb-1">
            WL ORNAMENTACIÓN <br /> &  ALUMINIO S . A
          </h3>
          <p className="text-[15px] text-center text-gray-500 p-3">
            Soluciones en infraestructura y proyectos modernos. Transformamos
            espacios con elegancia y funcionalidad
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-around items-center gap-3 flex-wrap text-sm font-medium text-gray-600 mb-3">
          <FooterLInks to="/proyectos" linkText="Proyectos" />
          <FooterLInks to="/#home" linkText="inicio" />
          <FooterLInks to="/register" linkText="Registrarse" />
          <FooterLInks to="/login" linkText="Iniciar Sesion" />
        </div>
        <div className="w-70 flex flex-col justify-around items-center p-6 bg-blue-50 gap-2 flex-wrap text-sm rounded-2xl font-medium text-gray-600">
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            322-456-8123
          </p>
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            ContactoOrnArias@gmail.com
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
           <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className="bg-blue-800 w-full h-full p-6 flex justify-center items-center">
        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} WL ORNAMENTACIÓN  &  ALUMINIO S . A. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
