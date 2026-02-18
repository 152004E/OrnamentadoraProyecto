import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { Wrench, Users, Zap, MoreHorizontal } from "lucide-react";
import { OperationalItem } from "./OperationalItem";

export const CategoryBudget = () => {
  const data = [
    { name: "Materiales", value: 15000000, color: "#f97316" },
    { name: "Nómina", value: 18000000, color: "#10b981" },
    { name: "Servicios", value: 9000000, color: "#8b5cf6" },
    { name: "Otros", value: 850000, color: "#94a3b8" },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 mt-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IZQUIERDA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Distribución de Gastos</h3>

          <div className="relative w-full h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-gray-400 text-sm">TOTAL</span>
              <span className="text-2xl font-bold">
                ${(total / 1000000).toFixed(1)}M
              </span>
            </div>
          </div>
        </div>

        {/* DERECHA (vacío por ahora) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Detalle Operativo</h3>

          <div className="space-y-4">
            <OperationalItem
              title="Materiales"
              description="Suministros y perfiles"
              amount={15000000}
              status="ok"
              color="#f97316"
              icon={<Wrench size={20} />}
            />

            <OperationalItem
              title="Nómina"
              description="Mano de obra y seguridad"
              amount={18000000}
              status="over"
              color="#10b981"
              icon={<Users size={20} />}
            />

            <OperationalItem
              title="Servicios"
              description="Energía y mantenimiento taller"
              amount={9000000}
              status="ok"
              color="#8b5cf6"
              icon={<Zap size={20} />}
            />

            <OperationalItem
              title="Otros"
              description="Gastos administrativos"
              amount={850000}
              status="ok"
              color="#94a3b8"
              icon={<MoreHorizontal size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
