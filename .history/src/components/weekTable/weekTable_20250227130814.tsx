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
    const [activeCheckboxes, setActiveCheckboxes] = useState<number[]>([]); // آرایه برای انتخاب‌های فعال

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

    // تابع برای تغییر وضعیت چک‌باکس
    const handleCheckboxChange = (index: number) => {
        if (selectedDays.includes(weekDays[index].day)) {
            // اگر روز قبلاً انتخاب شده، حذفش می‌کنیم
            onDaySelect(selectedDays.filter(day => day !== weekDays[index].day));
        } else {
            // در غیر این صورت، روز را اضافه می‌کنیم
            onDaySelect([...selectedDays, weekDays[index].day]);
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
                                {/* دکمه‌ها در ردیف دوم */}
                                {index !== 0 && (
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                        onClick={() => handleCheckboxChange(index)}
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
                                {/* چک‌باکس برای هر روز */}
                                {selectedDays.includes(item.day) && (
                                    <div className="mt-2 bg-[#729FFE] p-2 flex flex-col text-white items-start border rounded-[8px]">
                                        <div className="w-full flex justify-end">
                                            <input
                                                type="checkbox"
                                                name="weekDay"
                                                value={item.day}
                                                checked={selectedDays.includes(item.day)}
                                                onChange={() => handleCheckboxChange(index)}
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
