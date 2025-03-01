'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side

import React from "react";

interface InputProps {
  label: string;
  type?: string; 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;  
  className?: string;  
}

const InformationUserBox: React.FC<InputProps> = ({
  label,
}) => {
  return (
    <div className={`w-full xl:w-1/5 ml-3 my-2 xl:my-0 max-w-[200px] ${}`}>

      
    </div>
  );
};

export default InformationUserBox;
