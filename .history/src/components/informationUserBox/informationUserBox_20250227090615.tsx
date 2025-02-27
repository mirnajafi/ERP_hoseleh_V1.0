'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

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
        <div className='w-full flex flex-row'>
            <div className="">
                <img src={imageSrc} alt="user image"/>
            </div>
            <div className="flex flex-row"></div>



        </div>
    );
};

export default InformationUserBox;
