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
        <div className={'w-full flex flex-col lg:flex-row containLeftSideBox text-xs '}>
            <div className="flex flex-col mr-4">
                <div className="font-bold flex flex-row items-center special-margin"><CircleIcon width={10} height={10} /> {title}</div>
                <div className="font-bold flex flex-row items-center special-margin">{name}</div>

                <div className="flex flex-col justify-center items-start  mt-2">
                    <span className="ml-10 flex flex-row-reverse w-full">تعداد کل جلسات:{ }</span>
                    <span className="ml-10 flex flex-row-reverse ">تعداد ماه:{ }</span>
                    <span className="ml-10 flex flex-row-reverse">تعداد جلسه در هفته:{ }</span>

                </div>

                <div className="font-bold flex flex-row items-center special-margin"><CircleIcon width={10} height={10} /> {title}</div>
                <div className="flex flex-col justify-center items-start  mt-2">
                    <span className="ml-10 flex flex-row-reverse">تعداد کل جلسات:{ }</span>
                    <span className="ml-10 flex flex-row-reverse">تعداد ماه:{ }</span>
                    <span className="ml-10 flex flex-row-reverse">تعداد جلسه در هفته:{ }</span>

                </div>
            </div>
        </div>
    );
};

export default RecommendedCourse;
