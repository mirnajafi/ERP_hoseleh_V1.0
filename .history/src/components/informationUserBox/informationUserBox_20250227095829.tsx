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
                    <span className="ml-10">سن: {age} سال<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.21875 1V4" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.2188 1V4" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.71875 8.08997H18.7188" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.2188 7.5V16C19.2188 19 17.7188 21 14.2188 21H6.21875C2.71875 21 1.21875 19 1.21875 16V7.5C1.21875 4.5 2.71875 2.5 6.21875 2.5H14.2188C17.7188 2.5 19.2188 4.5 19.2188 7.5Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9125 12.7H13.9215" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9125 15.7H13.9215" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2133 12.7H10.2222" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2133 15.7H10.2222" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.51404 12.7H6.52302" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.51404 15.7H6.52302" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
                </div>
            </div>
        </div>
    );
};

export default InformationUserBox;
