interface SettingsInputProps {
  label: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SettingsInput = ({
  label,
  value,
  type = "text",
  onChange,
}: SettingsInputProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg px-4 py-2 border border-gray-300 bg-gray-50 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
