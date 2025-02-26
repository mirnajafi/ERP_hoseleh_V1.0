'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React, { useState } from "react";

interface DropdownProps {
    label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {

 
  

    return (
        <button className="relative inline-block text-left w-full xl:w-1/5 ml-3 max-w-[200px]">
            <label className="block text-sm  text-gray-700 mb-2 text-right font-bold">{label}</label>


           
        </button>
    );
};

export default Dropdown;
