'use client';

import React from "react";

interface InputDateProps {
  label: string;
  type?: string;
  valueDay?: string;
  valueMonth?: string;
  valueYear?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderDay: string;
  placeholderMonth: string;
  placeholderYear: string;

  required?: boolean;
  className?: string;
}

const InputDate: React.FC<InputDateProps> = ({
  label,
  type = "text",
  valueDay,
  valueMonth,
  valueYear,
  onChange,
  placeholderDay,
  placeholderMonth,
  placeholderYear,
  required = false,
  className = "",
}) => {
  return (
    <div className={`w-full xl:w-1/5 ml-3 max-w-[200px]  ${className}`}>
      <label className="block text-xs text-gray-700 mb-1 font-bold font-bold">{label}</label>

      <div className="flex flex-row">
        <input
          type={type}
          value={valueDay}
          onChange={onChange}
          placeholder={placeholderDay}
          required={required}
          className="block w-full p-2 m-1 max-w-200 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type={type}
          value={valueMonth}
          onChange={onChange}
          placeholder={placeholderMonth}
          required={required}
          className="block w-full p-2 m-1  max-w-200 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type={type}
          value={valueYear}
          onChange={onChange}
          placeholder={placeholderYear}
          required={required}
          className="block w-full p-2 m-1 max-w-200 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default InputDate;
