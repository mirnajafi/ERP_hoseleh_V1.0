'use client';  

import React from "react";
import './informationUserBox.css'

interface InformationUserProps {
    name: string;
    phoneNumber: number;
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
                <img className="imageUser" src={imageSrc} alt="user image" />
            </div>
            <div className="flex flex-col">
                <div>{name}</div>
                <div className="flex flex-row">
                    <span>{phoneNumber}</span>
                    <span>نام ارزیاب:{evaluator}</span>
                    <span>سن:{age}سال</span>
                </div>
            </div>



        </div>
    );
};

export default InformationUserBox;
