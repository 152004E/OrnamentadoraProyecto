import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SettingsInput } from "../SettingsInput";
import {
  faCheckCircle,
  faCircleDot,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { RequiredArticle } from "./RequiredArticle";

export const SecuritySerrings = () => {
  return (
    <section className=" border border-gray-400 rounded-xl bg-gray-100 overflow-hidden mb-3">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4 border-b border-gray-400 bg-linear-to-r  from-blue-700/90  to-blue-400/90  p-4 ">
        <FontAwesomeIcon icon={faGear} />
        Gestión de Acceso
      </h3>
      <div className="px-3">
        <div className="grid grid-cols-1 gap-4">
          <SettingsInput
            label="Contraseña Actual"
            value="Ingrese Su contraseña Actual"
          />
          <SettingsInput label="Nueva contraseña" value="MInimo 8 caracteres" />
          <SettingsInput
            label="Repita su contraseña nueva"
            value="Repita su nueva contraseña"
          />
        </div>
        <div className="border border-gray-400 my-4 p-4 rounded-xl bg-white">
          <h3 className="font-semibold mb-3">Requisitos de contraseña</h3>

          <RequiredArticle
            body="Mínimo 8 caracteres de longitud"
            icon={faCheckCircle}
          />

          <RequiredArticle
            body="Al menos una letra mayúscula"
            icon={faCircleDot}
          />

          <RequiredArticle
            body="Al menos un número o símbolo"
            icon={faCircleDot}
          />

          <RequiredArticle
            body="No puede ser igual a las anteriores"
            icon={faCircleDot}
          />
        </div>
      </div>
    </section>
  );
};
