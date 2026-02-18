interface OperationalItemProps {
  title: string;
  description: string;
  amount: number;
  status: "ok" | "over";
  color: string;
  icon: React.ReactNode;
}

export const OperationalItem = ({
  title,
  description,
  amount,
  status,
  color,
  icon,
}: OperationalItemProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition">

      {/* LADO IZQUIERDO */}
      <div className="flex items-center gap-4">

        {/* ICONO */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        {/* TEXTO */}
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="text-right">
        <p className="font-semibold text-gray-800">
          ${amount.toLocaleString("es-CO")}
        </p>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium mt-1 inline-block ${
            status === "ok"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status === "ok" ? "● EN PRESUPUESTO" : "▲ SOBRE PRESUPUESTO"}
        </span>
      </div>
    </div>
  );
};
