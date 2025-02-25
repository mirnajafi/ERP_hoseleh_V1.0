/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import ReportModal from './ReportModal/ReportModal';

interface ChallengeData {
  id: number;
  name: string;
  duration: string;
  startDate: string;
  type: 'رایگان' | 'اشتراکی';
  status: 'فعال' | 'انجام شده';
  reports?: string;
}

const data: ChallengeData[] = [
  {
    id: 1,
    name: "چالش حذف شکر",
    duration: "7 روز",
    startDate: "1403/08/01",
    type: "رایگان",
    status: "فعال",
    reports: "گزارش ها"
  },
  {
    id: 2,
    name: "چالش حذف شکر",
    duration: "3 روز",
    startDate: "1403/06/21",
    type: "اشتراکی",
    status: "انجام شده",
    reports: "گزارش ها"
  },
  {
    id: 3,
    name: "چالش حذف شکر",
    duration: "3 روز",
    startDate: "1403/06/21",
    type: "اشتراکی",
    status: "انجام شده",
    reports: "گزارش ها"
  }
];

export default function DataTable() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-lg bg-white p-4 mt-3">
        <table className="w-full border-separate border-spacing-0 border border-dashboard-bg rounded-lg">
          <thead className="bg-dashboard-bg">
            <tr>
              <th className="py-3 px-2 text-xs font-medium text-gray-600 border-b border-l border-gray-100 w-[50px] text-center">ردیف</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-600 border-b border-gray-100">نام چالش</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-600 border-b border-gray-100">مدت زمان</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-600 border-b border-gray-100">تاریخ شروع</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-600 border-b border-gray-100">نوع چالش</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-600 border-b border-gray-100">وضعیت چالش</th>
              <th className="py-3 px-2 text-right text-sm font-medium text-gray-600 border-b border-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition duration-150">
                <td className="py-3 px-2 text-xs text-gray-600 border-b border-l border-gray-100 text-center">{item.id}</td>
                <td className="py-3 px-2 text-xs text-gray-800 border-b border-gray-100">{item.name}</td>
                <td className="py-3 px-2 text-xs text-gray-600 border-b border-gray-100">{item.duration}</td>
                <td className="py-3 px-2 text-xs text-gray-600 border-b border-gray-100">{item.startDate}</td>
                <td className="py-3 px-2 border-b border-gray-100">
                  <span className={`text-xs px-3 py-1 rounded-lg ${
                    item.type === 'رایگان' 
                      ? 'text-red-500' 
                      : 'text-gray-600'
                  }`}>
                    {item.type}
                  </span>
                </td>
                <td className="py-3 px-2 border-b border-gray-100">
                  <span className={`text-xs px-3 py-1 rounded-lg ${
                    item.status === 'فعال'
                      ? 'text-emerald-500'
                      : 'text-gray-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-2 border-b border-gray-100">
                  <button 
                    onClick={() => setIsReportModalOpen(true)}
                    className="text-sm text-blue-500 hover:text-blue-600 bg-blue-50 px-3 py-1 rounded-2xl"
                  >
                    {item.reports}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
      />
    </>
  );
}
