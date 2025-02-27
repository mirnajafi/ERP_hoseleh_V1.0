'use client';

import React from "react";
import Image from "next/image";
import './informationUserBox.css';

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
                    <span className="ml-10">نام ارزیاب: {evaluator}</span>
                    <span className="ml-10">سن: {age} سال
                   <Ca </span>
                </div>
            </div>
        </div>
    );
};

export default InformationUserBox;
