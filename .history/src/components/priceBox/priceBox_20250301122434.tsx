'use client';

import React from "react";
import './priceBox.css';


interface BoxProps {
    title: string;
    price:
    className?: string;
}

const priceBox: React.FC<BoxProps> = ({
    resultText,
    className
}) => {
    return (
        <div className="flex flex-col mt-6">
            <div className="flex flex-row m-2 border border-[#FFA466] p-[8px] bg-[#FEE8D82B] rounded-[8px] text-xs"><span>مبلغ کلاس و خدمات:</span><span className="font-bold mr-4">7,800,000 ریال</span></div>
            <span className="text-grey-100 text-xs m-2">هفتصد هزار تومان</span>
        </div>
    );
};

export default priceBox;
