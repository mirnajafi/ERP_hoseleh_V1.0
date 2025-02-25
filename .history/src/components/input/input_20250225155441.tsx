'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface InputProps {
  label: string;
  type?: string;  // نوع ورودی، مثل text، password و غیره
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;  
  className?: string;  
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text", // پیش‌فرض نوع ورودی text
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {/* لیبل ورودی */}
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

      {/* فیلد ورودی */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default Input;
