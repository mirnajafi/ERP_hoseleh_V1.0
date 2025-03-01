'use client';

import React from "react";
import './recommendedCourse.css';
import CircleIcon from "../icons/circle";


interface BoxProps {
    title: string;
    name: string;
}

const RecommendedCourse: React.FC<BoxProps> = ({
    title,
    name,

}) => {
    return (
        <div className={'w-full flex flex-col lg:flex-row-reverse text-xs bg-[#4CAF501A] rounded-[8px] mt-4 p-5'}>
            <div className="flex flex-col mr-4">
                <div className="font-bold flex flex-row items-center special-margin"><CircleIcon fillColor="#4CAF50" color="white"  width={10} height={10} /> {title}</div>
                <div className="font-bold flex flex-row items-center  border-r border-[#4CAF50]">{name}</div>

                <div className="flex flex-col  border-r border-[#4CAF50]">
                    <span className="ml-10 flex flex-row w-full justify-between">تعداد کل جلسات:  <div className="bg-[#4CAF50] rounded-[8px] text-white">6</div></span>
                    <span className="ml-10 flex flex-row w-full justify-between">تعداد ماه: <div className="bg-[#4CAF50] rounded-[8px] text-white">6</div></span>
                    <span className="ml-10 flex flex-row w-full justify-between">تعداد جلسه در هفته: <div className="bg-[#4CAF50] rounded-[8px] text-white">6</div></span>

                </div>

                <div className="font-bold flex flex-row items-center special-margin"><CircleIcon fillColor="#4CAF50" color="white" width={10} height={10} /> {title}</div>
                <div className="flex flex-col justify-center items-start  mt-2">
     
                    <span className="flex flex-row-reverse bg-white rounded-[8px] p-2 m-1"> فاطمه یوسفی</span>
                    <span className="flex flex-row-reverse bg-white rounded-[8px] p-2 m-1"> فاطمه یوسفی</span>
                    <span className="flex flex-row-reverse bg-white rounded-[8px] p-2 m-1"> فاطمه یوسفی</span>


                </div>
            </div>
        </div>
    );
};

export default RecommendedCourse;
