import { Button } from "../../../componentsLayout/Button";

interface Props {
  formData: any;
  setFormData: any;
  onNext: () => void;
  onClose: () => void;
}

export default function StepBasicInfo({
  formData,
  setFormData,
  onNext,
  onClose
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">
          Nombre del Proyecto
        </label>
        <input
          type="text"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.nombre_proyecto}
          onChange={(e) =>
            setFormData({
              ...formData,
              nombre_proyecto: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea
          className="w-full border rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({
              ...formData,
              descripcion: e.target.value,
            })
          }
        />
      </div>

      <div className="flex justify-end gap-3 py-6">
        <Button
          text="Cancelar "
          onClick={onClose}
          className="bg-transparent border border-black  text-black! px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        />

        <Button
          text="Siguiente "
          onClick={onNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        />
      </div>
    </div>
  );
}
