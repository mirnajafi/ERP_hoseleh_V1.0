'use client';

import React from "react";
import './leftSideBox.css';
import CircleIcon from "../icons/circle";


interface BoxProps {
    title: string;
    test1:string;
    className?: string;
}

const LeftSideBox: React.FC<BoxProps> = ({
    title,
    test1,
    className
}) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row containLeftSideBox text-xs ${className}`}>
            <div className="flex flex-col mr-4">
                <div className="font-bold"><CircleIcon/> {title}</div>
                <div className="flex flex-col justify-center items-start  mt-2">
                    <span className="ml-10 flex flex-row-reverse">{test1}</span>
                    <span className="ml-10 flex flex-row-reverse">{test1}</span>
                    <span className="ml-10 flex flex-row-reverse">{test1}</span>
                    <span className="ml-10 flex flex-row-reverse">{test1}</span>

                </div>
            </div>
        </div>
    );
};

export default LeftSideBox;
