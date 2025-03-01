"use client";

import React, { useEffect, useState } from "react";

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
                <span>{dates[index] || "در حال بارگذاری..."}</span>
                <div className="mt-2 bg-[#729FFE] h-10">
                  <input
                    type="radio"
                    name="weekDay"
                    value={item.day}
                    checked={selectedDay === item.day}
                    onChange={() => onDaySelect(item.day)}
                  />
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeekTable;
