'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface InformationUserProps {
    name: string;
    phoneNumber: number;
    evaluator: string;
    age: string;
}

const InformationUserBox: React.FC<InformationUserProps> = ({
    name,
    phoneNumber,
    evaluator,
    a
}) => {
    return (
        <div className='w-full xl:w-1/5 ml-3 my-2 xl:my-0 max-w-[200px]'>


        </div>
    );
};

export default InformationUserBox;
