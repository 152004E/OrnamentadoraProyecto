import {  faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SettingsInput } from "../SettingsInput"

export  const PerfilSettings = () => {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <FontAwesomeIcon icon={faUser} />
        Información de Perfil
      </h3>

        <div className="grid grid-cols-1 gap-4">
        <SettingsInput label="Nombre y apellidos " value="Example " />
        <SettingsInput label="Email" value="example@gmail.com" />
        <SettingsInput label="Teléfono Personal" value="+57 312 456 7890" />
      </div>
    </section>
  )
}

