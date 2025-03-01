'use client';

import React from "react";
import './resultBox.css';


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
        <div className={`w-full flex flex-col lg:flex-row containResultBox text-xs ${className}`}>
            <div className="flex flex-col mr-4">
                <div className="font-bold"> {title}</div>
                <div className="flex flex-col justify-center items-start lg:flex-row mt-2">
                    <span className="ml-10 flex flex-row-reverse">{test1}</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBox;
