'use client';

import React from "react";
import Select from "react-select";

interface MultiSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value: { value: string; label: string }[];
  onChange: (selected: any) => void;
  placeholder?: string;
}

const ReusableMultiSelect: React.FC<MultiSelectProps> = ({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = "انتخاب کنید..." 
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}
      <Select
        isMulti
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        noOptionsMessage={() => "موردی یافت نشد"}
        isClearable
        isSearchable
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "8px",
            borderColor: "#ccc",
            boxShadow: "none",
            "&:hover": { borderColor: "#888" },
          }),
        }}
      />
    </div>
  );
};

export default ReusableMultiSelect;
