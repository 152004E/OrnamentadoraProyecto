import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SettingsInput } from "../SettingsInput";
import {
  faCheckCircle,
  faCircleDot,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export const SecuritySerrings = () => {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <FontAwesomeIcon icon={faGear} />
        Gestion de Acceso
      </h3>

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
      <div>
        <h3>Requisitos de contraseña </h3>
        <article>
          <FontAwesomeIcon icon={faCheckCircle} />
          <p>Minino 8 caracteres de longitud</p>
        </article>
        <article>
          <FontAwesomeIcon icon={faCircleDot} />
          <p>Minino 8 caracteres de longitud</p>
        </article>
        <article>
          <FontAwesomeIcon icon={faCircleDot} />
          <p>Al menos una letra mayuscula</p>
        </article>
        <article>
          <FontAwesomeIcon icon={faCircleDot} />
          <p>Al menos un numero o simbolo</p>
        </article>
        <article>
          <FontAwesomeIcon icon={faCircleDot} />
          <p>No puede ser igual las anteriores</p>
        </article>
      </div>
    </section>
  );
};
