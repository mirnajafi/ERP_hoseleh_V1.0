'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface BtnProps {
    label: string;
}

const TransparentBtn: React.FC<BtnProps> = ({ label }) => {

    return (
        <div className="w-100px text-[#01A384] text-right bg-black w-full">
            <button className="">
                
                {label}
            </button>
        </div>
    );
};

export default TransparentBtn;
