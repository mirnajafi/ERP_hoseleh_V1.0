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
    <label className="flex items-center space-x-2 cursor-pointer فسطف-سئ">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 rounded-full border-2 ${
          checked ? "border-pink-500" : "border-gray-400"
        } flex items-center justify-center transition-all`}
      >
        {checked && <div className="w-2.5 h-2.5 bg-pink-500 rounded-full" />}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
