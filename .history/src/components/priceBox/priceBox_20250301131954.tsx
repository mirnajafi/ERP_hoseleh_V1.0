'use client';

import React from "react";
import './priceBox.css';


interface BoxProps {
    title: string;
    price: string;
    priceText: string;
}

const PriceBox: React.FC<BoxProps> = ({
    title,
    price,
    priceText
}) => {
    return (
        <div className="flex flex-col mt-6 w-full lg:">
            <div className="flex flex-row m-2 border border-[#FFA466] p-[8px] bg-[#FEE8D82B] rounded-[8px] text-xs"><span>{title}</span><span className="font-bold mr-4">{price}</span></div>
            <span className="text-grey-100 text-xs m-2 mt-1">{priceText}</span>
        </div>
    );
};

export default PriceBox;
