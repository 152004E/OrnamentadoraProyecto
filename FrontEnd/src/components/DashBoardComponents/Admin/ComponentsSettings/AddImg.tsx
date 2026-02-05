import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { TitleSubTitle } from "../../../componentsLayout/TitleSubTitle";

interface AddImgProps{
  title : string
  descripcion : string
}

export const AddImg = ({descripcion , title}:AddImgProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  return (
    <div className="my-5">
      <TitleSubTitle
        title={title}
        subTitle="Este logo aparecera en sus cotizaciones y facturas"
        classTitle="text-3xl tracking-tight"
      />
      <div className="w-full max-w-sm rounded-2xl border-2 mt-4 border-dashed border-blue-300 p-6 flex flex-col items-center gap-4 bg-blue-50">
        {/* Preview */}
        <div className="relative w-24 h-24 rounded-xl bg-blue-100 flex items-center justify-center">
          {preview ? (
            <img
              src={preview}
              className="w-full h-full object-contain rounded-xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faImage}
              className="text-blue-400 text-2xl"
            />
          )}

          {/* Edit button */}
          <button
            onClick={() => inputRef.current?.click()}
            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow"
          >
            <FontAwesomeIcon icon={faPen} className="text-xs" />
          </button>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="font-semibold text-sm">{descripcion}</p>
          <p className="text-xs text-gray-500">
            JPG, PNG o SVG. Tamaño máximo de 2MB.
            <br />
            Recomendado 400x400px.
          </p>
        </div>

        {/* Buttons */}
        <button
          onClick={() => inputRef.current?.click()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          Seleccionar archivo
        </button>

        <button
          onClick={() => setPreview(null)}
          className="border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition"
        >
          Eliminar
        </button>

        {/* Hidden input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg, image/svg+xml"
          hidden
          onChange={(e) => e.target.files && handleFile(e.target.files[0])}
        />
      </div>
    </div>
  );
};
