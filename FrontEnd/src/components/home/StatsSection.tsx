interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col items-start justify-center">
      <span className="text-3xl font-bold text-blue-700 mb-1">{value}</span>
      <span className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </span>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-gray-100 rounded-2xl">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        <StatItem  value="27+" label="Años de experiencia" />
        <StatItem value="450" label="Proyectos completados" />
      </div>
    </section>
  );
};
