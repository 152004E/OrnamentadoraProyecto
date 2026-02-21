import { useState } from "react";
import StepBasicInfo from "./StepBasicInfo";
import StepUploadFiles from "./StepUploadFiles";
import { ProgressBar } from "../AdminDashComponents/Home/ProgressBar";
import { Button } from "../../../componentsLayout/Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateProjectModal({ isOpen, onClose }: Props) {
  const calculateProgress = () => {
    if (formData.archivos && formData.archivos.length > 0) {
      return 100;
    }

    let progress = 0;

    if (formData.nombre_proyecto.trim() !== "") progress += 10;
    if (formData.descripcion.trim() !== "") progress += 20;

    return progress;
  };
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nombre_proyecto: "",
    descripcion: "",
    archivos: [] as File[],
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-87.5 rounded-2xl shadow-xl  overflow-hidden">
        <div className="bg-blue-600 p-3">
          <ProgressBar
            value={calculateProgress()}
            color="bg-white "
            classnameText="text-white text-[15px] font-bold "
          />
          <div className="mt-4">
            <ul className="flex items-center justify-between text-xs font-semibold text-white/70">
              {[
                { id: 1, label: "INFORMACIÓN BÁSICA" },
                { id: 2, label: "CRONOGRAMA" },
                { id: 3, label: "ARCHIVOS VISUALES" },
              ].map((item, index) => (
                <li key={item.id} className="flex items-center w-full relative">
                  {/* Número */}
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-sm z-10
          ${
            step >= item.id
              ? "bg-blue-400 text-white"
              : "bg-white/20 text-white"
          }`}
                  >
                    {item.id}
                  </div>

                  {/* Texto */}
                  <span
                    className={`ml-1 ${
                      step >= item.id ? "text-white" : "text-white/50"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Línea */}
                  {index !== 2 && (
                    <div className="flex-1 h-0.5 mx-2 bg-white/20 relative">
                      <div
                        className={`absolute top-0 left-0 h-0.5 bg-blue-400 transition-all duration-500`}
                        style={{
                          width: step > item.id ? "100%" : "0%",
                        }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-5 py-2 relative">
          {/* Botón cerrar */}
          <Button
            text="✕"
            onClick={onClose}
            className="absolute gap-0! p-0! bg-transparent font-black  top-4 right-4 text-gray-500! hover:text-black "
          />

          {/* Título */}
          <h2 className="text-2xl font-bold mb-6 ">Nuevo Proyecto</h2>

          {/* Steps */}
          {step === 1 && (
            <StepBasicInfo
              formData={formData}
              setFormData={setFormData}
              onNext={() => setStep(2)}
              onClose={onClose}
            />
          )}

          {step === 2 && (
            <StepUploadFiles
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep(1)}
              onFinish={() => {
                console.log(formData);
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
