import { X, Filter } from "lucide-react";
import { useState } from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
  const [selected, setSelected] = useState<string>("Materiales");

  if (!isOpen) return null;

  const categories = [
    { name: "Materiales", color: "bg-orange-100 text-orange-600" },
    { name: "Mano de obra", color: "bg-green-100 text-green-600" },
    { name: "Transporte", color: "bg-purple-100 text-purple-600" },
    { name: "Otros", color: "bg-blue-100 text-blue-600" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* CARD */}
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 fadeIn_0.2s_ease-out">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Filter size={18} />
            <h3 className="font-semibold text-gray-800">Filtros</h3>
          </div>

          <button onClick={onClose}>
            <X size={18} className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* CATEGORÍAS */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 mb-3">
            CATEGORÍAS
          </p>

          <div className="space-y-3">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setSelected(cat.name)}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                  selected === cat.name
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${cat.color}`}
                  >
                    ●
                  </div>
                  <span className="text-sm text-gray-700">
                    {cat.name}
                  </span>
                </div>

                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    selected === cat.name
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ORDENAR */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 mb-2">
            ORDENAR POR
          </p>

          <select className="w-full border rounded-xl p-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
            <option>Más reciente</option>
            <option>Más antiguo</option>
            <option>Mayor monto</option>
            <option>Menor monto</option>
          </select>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Limpiar
          </button>

          <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  );
};
