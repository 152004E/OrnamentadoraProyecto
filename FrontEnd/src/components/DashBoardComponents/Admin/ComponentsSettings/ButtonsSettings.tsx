import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../componentsLayout/Button";
import { faSave } from "@fortawesome/free-solid-svg-icons/faSave";


export const ButtonsSettings = () => {
  return (
    <div className="flex  justify-end gap-2">
      <Button iconLetf={faCancel} text="Descartar" className="px-4! py-2.5! font-semibold bg-white text-gray-600! border" />
      <Button
        text="Guardar Cambios"
        iconRight={faSave}
        className="px-4! py-2.5! "
      />
    </div>
  );
};
