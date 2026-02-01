import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SettingsInput } from "../SettingsInput";

export const EmpresaSettings = () => {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <FontAwesomeIcon icon={faBuilding} />
        Información de la Empresa
      </h3>

    
      <div className="grid grid-cols-1 gap-4">
        <SettingsInput label="Nombre de la empresa" value="WL  S.A.S." />
        <SettingsInput label="NIT" value="901.452.883-4" />
        <SettingsInput label="Teléfono" value="+57 312 456 7890" />
        <SettingsInput
          label="Dirección"
          value="Av. Principal #45 Sur, Bogotá"
        />
      </div>
    </section>
  );
};
