
'use client';

import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CircleIcon: React.FC<IconProps> = ({ width = 21, height = 22}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="12" rx="6" fill="white"/>
    <rect x="2" y="2" width="8" height="8" rx="4" fill="white"/>
    <rect x="2" y="2" width="8" height="8" rx="4" stroke="#F56B84" stroke-width="2"/>
  </svg>
  
  );
};

export default CircleIcon;
