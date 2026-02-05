interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* Input real (oculto) */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />

      {/* Fondo */}
      <div
        className="
          w-11 h-6 
          bg-gray-300 
          peer-focus:outline-none 
          rounded-full 
          peer 
          peer-checked:bg-blue-600 
          transition-colors
          duration-400
        "
      />

      {/* Botón */}
      <div
        className="
          absolute left-1 top-1
          w-4 h-4 
          bg-white 
          rounded-full 
          transition-transform
           duration-400
          peer-checked:translate-x-5
        "
      />
    </label>
  );
};
