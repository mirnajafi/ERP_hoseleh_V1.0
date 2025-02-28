import React from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer text-xs">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        className={`w-4 h-2 rounded-full border-2 ${
          checked ? "border-blue-500" : "border-gray-400"
        } flex items-center justify-center transition-all`}
      >
        {checked && <div className="w-1 h-1 bg-blue-500 rounded-full" />}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
