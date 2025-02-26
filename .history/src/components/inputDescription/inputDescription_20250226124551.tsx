'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface InputProps {
  label: string;
  type?: string; 
  value: string;
  placeholder?: string;
  required?: boolean;  
  className?: string;  
}

const InputDescription: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div className={`w-full xl:w-1/2 ml-3 max-w-[500px] ${className}`}>
      <label className="block text-xs text-gray-700 mb-2 font-bold font-bold">{label}</label>

      <textarea
        value={value}
        placeholder={placeholder}
        required={required}
        className="block w-full p-2 resize-none max-w-200 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default InputDescription;
