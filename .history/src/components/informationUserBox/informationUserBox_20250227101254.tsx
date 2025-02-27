'use client';

import React from "react";
import Image from "next/image";
import './informationUserBox.css';
import CalendarIcon from "../icons/calendar";
import EvaluatorIcon from "../icons/evaluator";

interface InformationUserProps {
    name: string;
    phoneNumber: string;
    evaluator: string;
    age: string;
    imageSrc: string;
}

const InformationUserBox: React.FC<InformationUserProps> = ({
    name,
    phoneNumber,
    evaluator,
    age,
    imageSrc
}) => {
    return (
        <div className='w-full flex flex-row containInfoBox'>
            <div className="containImageUser">
                <Image
                    className="imageUser"
                    src={imageSrc}
                    alt="user image"
                    width={60}
                    height={60}
                />
            </div>
            <div className="flex flex-col mr-4">
                <div className="font-bold">{name}</div>
                <div className="flex flex-row mt-2">
                    <span className="ml-10">{phoneNumber}</span>
                    <span className="ml-10">نام ارزیاب: {evaluator}


                        <EvaluatorIcon width={20} height={20}/>
                    </span>
                    <span className="ml-10 flex flex-row-reverse">سن: {age} سال 
                        <CalendarIcon width={20} height={20} />

                    </span>
                </div>
            </div>
        </div>
    );
};

export default InformationUserBox;
