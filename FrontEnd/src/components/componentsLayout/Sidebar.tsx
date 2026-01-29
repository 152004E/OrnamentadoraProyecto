import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolderOpen,
  faUsers,
  faFileInvoice,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import WlSinFondo from "../../assets/wlSinFondo.png";
import { Button } from "./Button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/*fondo oscuro */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      )}

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50
        flex flex-col
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          <div className="p-3.75 bg-blue-600 rounded-br-2xl">
            <button onClick={onClose} className="text-xl text-white font-bold">
              ✕
            </button>
          </div>

          <header className="p-4 text-center border-b border-gray-200">
            <figure className="flex flex-col items-center gap-2">
              <img
                src={WlSinFondo}
                alt="Logo WL Ornamentación y Aluminio"
                className="w-15 h-15 object-contain bg-blue-600/30 rounded-full"
              />

              <figcaption className="flex flex-col items-center">
                <p className="font-semibold">Hola, Usuario</p>
                <p className="text-sm font-semibold text-gray-400">
                  Bienvenido a <br /> <span className="tracking-wide text-gray-500">WL ORNAMENTACIÓN & ALUMINIO S.A</span>
                </p>
              </figcaption>
            </figure>
          </header>
        </div>
        <main className="flex-1 overflow-y-auto">

          <a
            href="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faHome} className="text-blue-600" />
            <span>Inicio</span>
          </a>
          <a
            href="/proyectos"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faFolderOpen} className="text-blue-600" />
            <span>Proyectos Realizados</span>
          </a>
          <a
            href="/nosotros"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faUsers} className="text-blue-600" />
            <span>Nosotros</span>
          </a>
          <a
            href="/contacto"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faFileInvoice} className="text-blue-600" />
            <span>Cotizar Proyecto</span>
          </a>
          <a
            href="/AdminDashboardHome"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faUser} className="text-blue-600" />
            <span>Mi Perfil</span>
          </a>
          <a
            href="/SystemSettings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faCog} className="text-blue-600" />
            <span>Configuración</span>
          </a>
        </main>

        <footer className="border-gray-200 border-t p-4  flex flex-col gap-3">
          <Button text="Cerrar Sesión" icon={faRightFromBracket} />
          <div className="flex  m-auto items-center">
            <a href="">ayuda y soporte</a>
          </div>
        </footer>
      </aside>
    </>
  );
};
