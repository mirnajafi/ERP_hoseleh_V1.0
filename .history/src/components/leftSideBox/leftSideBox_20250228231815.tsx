'use client';

import React from "react";
import './resultBox.css';


interface ResultBoxProps {
    title: string;
    className?: string;
}

const ResultBox: React.FC<ResultBoxProps> = ({
    resultText,
    className
}) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row containResultBox text-xs ${className}`}>
            <div className="flex flex-col mr-4">
                <div className="font-bold"/div>
                <div className="flex flex-col justify-center items-start lg:flex-row mt-2">
                    <span className="ml-10 flex flex-row-reverse">{resultText}</span>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;
