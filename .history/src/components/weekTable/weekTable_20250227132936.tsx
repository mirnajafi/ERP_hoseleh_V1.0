"use client";

import React, { useEffect, useState } from "react";
import './weekTable.css';

interface WeekTableProps {
    apiUrl: string; 
    selectedDay: string;
    onDaySelect: (day: string) => void;
}

const WeekTable: React.FC<WeekTableProps> = ({ apiUrl, selectedDay, onDaySelect }) => {
    const weekDays = [
        { day: "ایام هفته" },
        { day: "شنبه" },
        { day: "یکشنبه" },
        { day: "دوشنبه" },
        { day: "سه‌شنبه" },
        { day: "چهارشنبه" },
        { day: "پنج‌شنبه" },
        { day: "جمعه" },
    ];

    const [dates, setDates] = useState<string[]>([]);
    const [showRadios, setShowRadios] = useState<boolean[]>(Array(weekDays.length).fill(false)); 

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setDates(data.dates); 
            } catch (error) {
                console.error("Error fetching dates:", error);
            }
        };

        fetchDates();
    }, [apiUrl]);

    const handleShowRadio = (index: number) => {
        const updatedShowRadios = [...showRadios];
        updatedShowRadios[index] = !updatedShowRadios[index]; 
        setShowRadios(updatedShowRadios); 
    };

    return (
        <div className="w-full overflow-x-auto bg-white text-xs ">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        {weekDays.map((item, index) => (
                            <th key={index} className="border px-4 py-2 text-center">
                                {item.day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {weekDays.map((item, index) => (
                            <td key={index} className="border px-4 py-2 text-center">
                                {/* برای ستون 0، فقط تاریخ را نمایش می‌دهیم */}
                                {index === 0 ? (
                                    <span className="font-bold">برنامه تمرینی</span>
                                ) : (
                                    <>
                                        <span>{dates[index]}</span>
                                        <button className="bg-[#FFF6F7] h-10 w-10 border rounded-lg border-[#FF7101] text-[#FF7101] text-xl flex justify-center items-center mx-auto"
                                            onClick={() => handleShowRadio(index)}
                                        >
                                            {showRadios[index] ? '-' : '+'}
                                        </button>
                                        {showRadios[index] && (
                                            <div className="mt-2 bg-[#729FFE] p-2 flex flex-col text-white items-start border rounded-[8px] ">
                                                <div className="w-full flex justify-end">
                                                    <input
                                                        type="radio"
                                                        name="weekDay"
                                                        value={item.day}
                                                        checked={selectedDay === item.day}
                                                        onChange={() => onDaySelect(item.day)}
                                                        className="radio-btn w-8 h-8 mt-0"
                                                    />
                                                </div>
                                                <span className="text-white mt-2">نام برنامه: بازتوانی ACL</span>
                                                <span className="text-white mt-2">سطح برنامه: A2</span>
                                            </div>
                                        )}
                                    </>
                                )}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default WeekTable;
