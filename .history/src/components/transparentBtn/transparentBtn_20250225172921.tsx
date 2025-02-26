'use client'; // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface BtnProps {
    label: string;
}

const TransparentBtn: React.FC<BtnProps> = ({ label }) => {

    return (
       <div className=""></div>
    );
};

export default TransparentBtn;
