'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React, { useState } from "react";

interface DropdownProps {
    label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {

 
  

    return (
        <button className="relative inline-block text-left w-full xl:w-1/5 ml-3 max-w-[200px]">

           
        </button>
    );
};

export default Dropdown;
