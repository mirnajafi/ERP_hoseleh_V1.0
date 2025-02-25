'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React, { useState } from "react";

interface DropdownProps {
    label: string;
    options: string[];
    onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  

    return (
        <div className="relative inline-block text-left w-full xl:w-1/5 ml-3 max-w-[200px]">
            <label className="block text-sm  text-gray-700 mb-2 text-right font-bold">{label}</label>

            <button
                type="button"
                className="inline-flex justify-between items-center w-full max-w-200 p-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={toggleDropdown}
            >
                انتخاب کنید
                <svg
                    className={`ml-1/2 h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

           
        </div>
    );
};

export default Dropdown;
