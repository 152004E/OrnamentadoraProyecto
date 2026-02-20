import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NewFinanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewFinanceModal = ({ isOpen, onClose }: NewFinanceModalProps) => {
  const [type, setType] = useState<"ingreso" | "egreso">("ingreso");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const isValid =
    amount !== "" && Number(amount) > 0 && category !== "" && date !== "";

  return (
    <div className="fixed inset-1 z-50 flex items-center justify-center bg-black/40 h-screen  backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="flex items-center gap-3 mb-1">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <h2 className="text-lg font-semibold">Nuevo Registro</h2>
        </div>

        {/* Tipo + Monto */}
        <div className="grid md:grid-cols-2 gap-4 mb-2">
          <div>
            <label className="text-sm text-gray-500">Tipo de Movimiento</label>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setType("ingreso")}
                className={`flex-1 py-2 rounded-xl border ${
                  type === "ingreso" ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                Ingreso
              </button>

              <button
                onClick={() => setType("egreso")}
                className={`flex-1 py-2 rounded-xl border ${
                  type === "egreso" ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                Egreso
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>
              <label className="text-sm text-gray-500">Monto ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full  px-4 py-1.75 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="0.00"
              />
            </div>
             {/* Categoría */}
          <div className="">
            <label className="text-sm text-gray-500">Categoría</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Categoría</option>
              <option value="hierro">Hierro</option>
              <option value="aluminio">Aluminio</option>
              <option value="mano_obra">Mano de Obra</option>
              <option value="transporte">Transporte</option>
            </select>
          </div>
          </div>

         
        </div>

        {/* Fecha + Método */}
        <div className="grid md:grid-cols-2 gap-4 mb-2">
          <div>
            <label className="text-sm text-gray-500">Fecha</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-2 px-4 py-2 border rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Método de Pago</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full mt-2 px-4 py-2 border rounded-xl"
            >
              <option value="">Seleccionar</option>
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="tarjeta">Tarjeta</option>
            </select>
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-2">
          <label className="text-sm text-gray-500">Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 px-4 py-2 border rounded-xl resize-none"
            rows={3}
            placeholder="Detalle del movimiento..."
          />
        </div>

        {/* Referencia */}
        <div className="mb-2">
          <label className="text-sm text-gray-500">
            Referencia / Nº Factura
          </label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full mt-2 px-4 py-2 border rounded-xl"
          />
        </div>

        {/* Archivo */}
        <div className="mb-4 border-dashed border-gray-800 ">
          <label className="text-sm text-gray-500">Adjuntar Recibo</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="w-full mt-2"
          />
          {file && (
            <p className="text-xs mt-1 text-gray-500">
              Archivo seleccionado: {file.name}
            </p>
          )}
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-200"
          >
            Cancelar
          </button>

          <button
            disabled={!isValid}
            className={`px-6 py-2 rounded-xl text-white ${
              isValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Guardar Registro
          </button>
        </div>
      </div>
    </div>
  );
};
