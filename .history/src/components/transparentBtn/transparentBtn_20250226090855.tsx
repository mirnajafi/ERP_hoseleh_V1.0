'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface BtnProps {
    label: string;
}

const TransparentBtn: React.FC<BtnProps> = ({ label }) => {

    return (
        <div className="w-200px text-[#01A384] text-right bg-black flex ">
            <button className="flex flex-row">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3.41666V11.5833" stroke="#01A384" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.91602 7.5H11.0827" stroke="#01A384" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {label}
            </button>
        </div>
    );
};

export default TransparentBtn;
