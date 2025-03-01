import React from "react";

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`w-5 h-5 rounded-full border-2 ${
          checked ? "border-pink-500" : "border-gray-400"
        } flex items-center justify-center`}
      >
        {checked && <div className="w-2.5 h-2.5 bg-pink-500 rounded-full" />}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;
