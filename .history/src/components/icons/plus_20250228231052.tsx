'use client';

import React from "react";

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

const PlusIcon: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 26 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 2H23.5" stroke="#007F63" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    );
};

export default PlusIcon;