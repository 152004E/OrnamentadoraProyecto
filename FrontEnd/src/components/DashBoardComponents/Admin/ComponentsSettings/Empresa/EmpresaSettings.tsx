import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SettingsInput } from "../SettingsInput";

export const EmpresaSettings = () => {
  return (
    <section className="border border-gray-400 rounded-xl overflow-hidden">
      {/* HEADER */}
      <h3 className="flex justify-between items-center gap-2 text-lg font-semibold text-white border-b border-gray-400 bg-linear-to-r from-blue-700/90 to-blue-400/90 p-4">
        <p className="flex items-center gap-2 text-[16px] ">
          <FontAwesomeIcon icon={faBuilding} />
          Información de la Empresa
        </p>

        {/* Opcional: badge */}
        <span className="flex">
          <p className="text-[12px] uppercase py-1 px-2 tracking-wide font-bold bg-white rounded-2xl text-blue-800">
            Empresa
          </p>
        </span>
      </h3>

      {/* BODY */}
      <div className="p-4 grid grid-cols-1 gap-4">
        <SettingsInput label="Nombre de la empresa" value="WL S.A.S." />
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
