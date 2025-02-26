'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React, { useState } from "react";

interface DropdownProps {
    label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {

 
  

    return (
        <div className="relative inline-block text-left w-full xl:w-1/5 ml-3 max-w-[200px]">
            <label className="block text-sm  text-gray-700 mb-2 text-right font-bold">{label}</label>

            <button
                type="button"
                className="inline-flex justify-between items-center w-full max-w-200 p-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>{}}
            >
                انتخاب کنید
              
            </button>

           
        </div>
    );
};

export default Dropdown;
