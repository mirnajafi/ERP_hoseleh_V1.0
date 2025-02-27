"use client";

import React, { useEffect, useState } from "react";
import './weekTable.css';

interface WeekTableProps {
    apiUrl: string; // URL برای گرفتن تاریخ‌ها از API
    selectedDays: string[]; // لیست روزهای انتخاب‌شده
    onDaySelect: (day: string) => void; // تابعی برای تغییر وضعیت روز انتخاب‌شده
}

const WeekTable: React.FC<WeekTableProps> = ({ apiUrl, selectedDays, onDaySelect }) => {
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
    const [activeButtons, setActiveButtons] = useState<number[]>([]); // آرایه برای دکمه‌های فعال

    // بارگذاری تاریخ‌ها از API
    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setDates(data.dates); // فرض می‌کنیم API تاریخ‌ها را به صورت آرایه برمی‌گرداند
            } catch (error) {
                console.error("Error fetching dates:", error);
            }
        };

        fetchDates();
    }, [apiUrl]);

    // تغییر وضعیت دکمه‌های فعال
    const handleButtonClick = (index: number) => {
        setActiveButtons((prev) => {
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index); // اگر قبلاً فعال است، غیرفعال می‌شود
            } else {
                return [...prev, index]; // در غیر این صورت، فعال می‌شود
            }
        });
    };

    // تغییر وضعیت روز انتخاب شده
    const handleRadioChange = (day: string) => {
        const isSelected = selectedDays.includes(day);
        if (isSelected) {
            onDaySelect(selectedDays.filter((d) => d !== day));
        } else {
            onDaySelect([...selectedDays, day]);
        }
    };

    return (
        <div className="w-full overflow-x-auto bg-white text-xs">
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
                                {/* دکمه‌ها برای انتخاب روز */}
                                {index !== 0 && (
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                        onClick={() => handleButtonClick(index)}
                                    >
                                        انتخاب
                                    </button>
                                )}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {weekDays.map((item, index) => (
                            <td key={index} className="border px-4 py-2 text-center">
                                <span>{dates[index] || "در حال بارگذاری..."}</span>

                                {/* نمایش رادیو باتن‌ها فقط وقتی دکمه برای اون روز انتخاب شده */}
                                {activeButtons.includes(index) && (
                                    <div className="mt-2 bg-[#729FFE] p-2 flex flex-col text-white items-start border rounded-[8px]">
                                        <div className="w-full flex justify-end">
                                            <input
                                                type="radio"
                                                name="weekDay"
                                                value={item.day}
                                                checked={selectedDays.includes(item.day)}
                                                onChange={() => handleRadioChange(item.day)}
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
        </div>
    );
};

export default WeekTable;
