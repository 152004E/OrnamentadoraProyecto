import { AddMediaGrid } from "./AddMediaGrid";

interface Props {
  formData: any;
  setFormData: any;
  onBack: () => void;
  onFinish: () => void;
}

export default function StepUploadFiles({
  formData,
  setFormData,
  onBack,
  onFinish,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Archivos Visuales</h3>
        <p className="text-sm text-gray-500 mb-6">
          Puedes subir hasta 6 imágenes o videos.
        </p>

        <AddMediaGrid formData={formData} setFormData={setFormData} />
      </div>

      <div className="flex justify-between py-6 border-t">
        <button
          onClick={onBack}
          className="px-6 py-2 border rounded-lg hover:bg-gray-100"
        >
          ← Atrás
        </button>

        <button
          onClick={onFinish}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}
