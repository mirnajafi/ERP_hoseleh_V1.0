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
     
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
