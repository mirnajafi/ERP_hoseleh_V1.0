'use client';

import React from "react";

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

const PlusIcon: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg width={} height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7.5V28.5" stroke="#007F63" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 18H28.5" stroke="#007F63" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        
    );
};

export default PlusIcon;