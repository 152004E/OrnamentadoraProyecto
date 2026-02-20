import {
  faMoneyBillTransfer,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderCards } from "../Home/HeaderCards";

interface MovementHistoryProps {
  onOpenFilters?: () => void;
  onOpenHistory?: () => void;
}

export const MovementHistory = ({
  onOpenFilters,
  onOpenHistory,
}: MovementHistoryProps) => {
  return (
    <section className="my-6">
      <article className="  min-w-70  px-6 py-3   rounded-2xl relative shadow-lg shadow-black border border-white/10 transition-all duration-300  hover:scale-[1.01]">
        <HeaderCards
          tituloBoton=""
          icon={faMoneyBillTransfer}
          titulo="Movimientos"
          subtitulo="Revisa y haz tus movimintos aquí"
          classBoton=" text-[12px] gap-0! px-3!"
          iconBoton={faSliders}
          onClickBoton={onOpenFilters}
        />

        <div className="border border-black my-2"></div>
        <div className="w-full">
          {/* 📊 Desktop */}
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
                <tr className="border-b hover:bg-gray-50">
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

          {/* 📱 Mobile */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="bg-white shadow-md rounded-xl p-4">
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

        <div className="border border-black my-2"></div>
        <button
          onClick={onOpenHistory}
          className="text-sm italic text-blue-600 tracking-wider flex justify-center items-center hover:underline"
        >
          Ver historial completo
        </button>
      </article>
    </section>
  );
};
