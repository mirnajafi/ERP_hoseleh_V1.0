"use client";

import React, { useEffect, useState } from "react";
import './weekTable.css';

interface WeekTableProps {
    apiUrl: string; // URL برای گرفتن تاریخ‌ها از API
    selectedDay: string;
    onDaySelect: (day: string) => void;
}

const WeekTable: React.FC<WeekTableProps> = ({ apiUrl, selectedDay, onDaySelect }) => {
    // روزهای هفته
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

    const [dates, setDates] = useState<string[]>([]); // تاریخ‌های فارسی
    const [activeRadio, setActiveRadio] = useState<number | null>(null); // مشخص کردن کدام رادیو باتن نمایش داده شود
    const [showAllRadios, setShowAllRadios] = useState(false); // وضعیت نمایش رادیو باتن‌ها در همه ستون‌ها

    // بارگذاری تاریخ‌ها از API
    useEffect(() => {
        const fetchDates = async () => {
            try {
                // درخواست به API برای دریافت تاریخ‌ها
                const response = await fetch(apiUrl);
                const data = await response.json();
                setDates(data.dates); // فرض می‌کنیم API تاریخ‌ها را به صورت آرایه برمی‌گرداند
            } catch (error) {
                console.error("Error fetching dates:", error);
            }
        };

        fetchDates();
    }, [apiUrl]);

    // تابع برای نمایش رادیو باتن در ستون انتخاب‌شده
    const handleShowRadio = (index: number) => {
        setActiveRadio(index); // تغییر وضعیت رادیو باتن فعال
    };

    // تابع برای نمایش همه رادیو باتن‌ها
    const handleShowAllRadios = () => {
        setShowAllRadios(!showAllRadios); // تغییر وضعیت نمایش همه رادیو باتن‌ها
    };

    return (
        <div className="w-full overflow-x-auto bg-white text-xs">
            <div className="py-2">
                {/* دکمه برای نمایش همه رادیو باتن‌ها */}
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={handleShowAllRadios}
                >
                    {showAllRadios ? "پنهان کردن رادیوها" : "نمایش همه رادیوها"}
                </button>
            </div>

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
                            <td key={index} className="border px-4 py-2 text-center flex fle justify-center">
                                <span>{dates[index]}</span>
                                {!(activeRadio === index || showAllRadios) && (
                                    <button className="bg-[#FFF6F7] h-10 w-10 border rounded-lg border-[#FF7101] text-[#FF7101] text-xl flex justify-center items-center"
                                        onClick={() => handleShowRadio(index)}
                                    >
                                        +
                                    </button>
                                )}
                                {(activeRadio === index || showAllRadios) && (
                                    <div className="mt-2 bg-[#729FFE] p-2 flex flex-col text-white items-start border rounded-[8px]">
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
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default WeekTable;
