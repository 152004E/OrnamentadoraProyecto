interface MovementHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MovementHistoryModal = ({
  isOpen,
  onClose,
}: MovementHistoryModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">
            Historial Completo de Movimientos
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 overflow-y-auto">
          {/* Desktop */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b">
                  <th className="text-left py-3">Fecha</th>
                  <th className="text-left">Concepto</th>
                  <th>Categoría</th>
                  <th className="text-right">Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="py-3">12 Oct 2023</td>
                  <td>Compra de Hierro Corrugado</td>
                  <td>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                      Materiales
                    </span>
                  </td>
                  <td className="text-right text-red-500 font-semibold">
                    -$2.450.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="bg-gray-50 shadow-sm rounded-xl p-4">
              <div className="flex justify-between text-sm text-gray-400">
                <span>12 Oct 2023</span>
                <span className="text-red-500 font-bold">-$2.450.000</span>
              </div>

              <h3 className="font-semibold mt-2">Compra de Hierro Corrugado</h3>

              <span className="inline-block mt-2 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                Materiales
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
