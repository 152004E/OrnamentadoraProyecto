import type { ReactNode } from "react";

interface AuthCheckboxProps {
  label: ReactNode;
  name: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthCheckbox = ({
  label,
  name,
  checked,
  onChange,
}: AuthCheckboxProps) => {
  return (
    <label className="flex items-start gap-2 text-[13px] text-gray-600 cursor-pointer select-none">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mt-1 w-4 h-4 accent-blue-600 rounded"
        required
      />
      <span>{label}</span>
    </label>
  );
};
