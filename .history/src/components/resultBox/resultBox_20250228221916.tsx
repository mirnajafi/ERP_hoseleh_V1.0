'use client';

import React from "react";
import Image from "next/image";
import './resultBox.css';
import CalendarIcon from "../icons/calendar";
import EvaluatorIcon from "../icons/evaluator";
import PhoneNumberIcon from "../icons/phoneNumber";

interface InformationUserProps {
    name: string;
    debt?:string;
    phoneNumber: string;
    evaluator: string;
    age: string;
    className?: string;  
}

const InformationUserBox: React.FC<InformationUserProps> = ({
    name,
    debt,
    phoneNumber,
    evaluator,
    age,
    className
}) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row containInfoBox text-xs ${className}`}>
            <div className="flex flex-col mr-4">
                <div className="font-bold">{name}</div>
                <div className="flex flex-col justify-center items-start lg:flex-row mt-2">
                    <span className="ml-10 flex flex-row-reverse">نام ارزیاب: {evaluator}

                    </span>
                
               
                </div>
            </div>
        </div>
    );
};

export default InformationUserBox;
