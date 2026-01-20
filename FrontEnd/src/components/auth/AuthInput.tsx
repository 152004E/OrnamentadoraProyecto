import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  iconLabel: IconDefinition;
  iconInput: IconDefinition;
  rightIcon?: IconDefinition;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRightIconClick?: () => void;
}

export const AuthInput = ({
  label,
  type,
  placeholder,
  name,
  iconLabel,
  iconInput,
  rightIcon,
  value,
  onChange,
  onRightIconClick,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col w-full relative">
      <label className="text-gray-600 text-sm mb-2">
        <FontAwesomeIcon icon={iconLabel} /> {label}
      </label>

      <FontAwesomeIcon
        icon={iconInput}
        className="text-gray-400 absolute bottom-7 left-2 text-[16px]"
      />

      <input
        type={type}
        className="border py-2 rounded-lg mb-4 text-black pl-10 text-[15px] bg-gray-300/20 duration-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />

      {rightIcon && (
        <FontAwesomeIcon
          onClick={onRightIconClick}
          icon={rightIcon}
          className="text-gray-400 absolute bottom-7 right-3 text-[16px] cursor-pointer"
        />
      )}
    </div>
  );
};
