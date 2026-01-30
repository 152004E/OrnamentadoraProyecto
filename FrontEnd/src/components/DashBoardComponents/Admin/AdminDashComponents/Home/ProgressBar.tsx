interface ProgressBarProps {
  value: number;
  color: string;
}

export const ProgressBar = ({ value, color }: ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Progreso</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
