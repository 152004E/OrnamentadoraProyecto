import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

interface AddMediaGridProps {

  formData: any;
  setFormData: any;
}

export const AddMediaGrid = ({

  setFormData,
}: AddMediaGridProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<(File | null)[]>(Array(6).fill(null));
  const handleFiles = (selectedFiles: FileList) => {
    const updated = [...files];
    let index = updated.findIndex((f) => f === null);

    for (let i = 0; i < selectedFiles.length && index !== -1; i++) {
      updated[index] = selectedFiles[i];
      index = updated.findIndex((f) => f === null);
    }

    setFiles(updated);

    // 🔥 ACTUALIZA EL PADRE
    const validFiles = updated.filter((f): f is File => f !== null);

    setFormData((prev: any) => ({
      ...prev,
      archivos: validFiles,
    }));
  };
  const removeFile = (index: number) => {
    const updated = [...files];
    updated[index] = null;
    setFiles(updated);

    const validFiles = updated.filter((f): f is File => f !== null);

    setFormData((prev: any) => ({
      ...prev,
      archivos: validFiles,
    }));
  };

  return (
    <div className="my-6">


      <div className="mt-6 grid grid-cols-3 gap-6">
        {files.map((file, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center overflow-hidden group"
          >
            {/* Preview */}
            {file ? (
              file.type.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(file)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={URL.createObjectURL(file)}
                  className="w-full h-full object-cover"
                />
              )
            ) : (
              <div className="flex flex-col items-center text-blue-400">
                <FontAwesomeIcon icon={faImage} className="text-2xl mb-2" />
                <span className="text-xs">Vacío</span>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
              <button
                onClick={() => inputRef.current?.click()}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-blue-600 text-sm"
                />
              </button>

              {file && (
                <button
                  onClick={() => removeFile(index)}
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-500 text-sm"
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        hidden
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
      />
    </div>
  );
};
