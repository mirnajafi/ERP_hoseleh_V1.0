'use client';

import React from "react";
import './recommendedServices.css';
import CircleIcon from "../icons/circle";


interface BoxProps {
    title: string;
}

const RecommendedServices: React.FC<BoxProps> = ({
    title,

}) => {
    return (
        <div className={'w-full flex flex-col lg:flex-row-reverse text-xs bg-[#4CAF501A] rounded-[8px] mt-4 p-5'}>
            <div className="flex flex-col mr-4">
                <div className="font-bold flex flex-row items-center special-margin"><CircleIcon fillColor="#4CAF50" color="white" width={10} height={10} /> {title}</div>

                <div className="flex flex-col text-xs">
                    <span className="ml-10 flex flex-row w-full justify-between items-center my-2">تعداد کل جلسات </span>
                    <span className="ml-10 flex flex-row w-full justify-between items-center my-2">تعداد ماه</span>

                </div>

            

            </div>
        </div>
    );
};

export default RecommendedServices;
