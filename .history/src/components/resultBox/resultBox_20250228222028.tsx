'use client';

import React from "react";
import './resultBox.css';


interface InformationUserProps {
    evaluator: string;
    className?: string;
}

const InformationUserBox: React.FC<InformationUserProps> = ({
    evaluator,
    className
}) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row containInfoBox text-xs ${className}`}>
            <div className="flex flex-col mr-4">
                <div className="font-bold">نتیجه ارزیابی و مشاوره</div>
                <div className="flex flex-col justify-center items-start lg:flex-row mt-2">
                    <span className="ml-10 flex flex-row-reverse">{evaluator}</span>
                </div>
            </div>
        </div>
    );
};

export default InformationUserBox;
