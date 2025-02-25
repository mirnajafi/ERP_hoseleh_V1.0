/* eslint-disable @next/next/no-img-element */
export default function LeftSection() {
  return (
    <div className="bg-white rounded-lg p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-gray-800">شهریور ۱۴۰۳</h2>
            <img
              src="/icons/triangle-.svg"
              alt="calendar"
              className="w-3 h-3 rotate-180"
            />
          </div>
          <p className="text-[10px] text-gray-500 mt-1">
            صفر-ربیع الاولAug-sep
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button>
            <img src="/icons/up.svg" alt="prev" className="w-5 h-5" />
          </button>
          <button>
            <img src="/icons/down.svg" alt="next" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((day) => (
          <div key={day} className="text-center text-xs text-gray-400 bg-gray-100 py-2 rounded-md">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`aspect-square flex items-center justify-center text-xs rounded-md transition-colors cursor-pointer
              ${
                day === 8
                  ? "bg-primery-600 text-white"
                  : "hover:bg-gray-100 text-gray-600 bg-gray-200"
              }
              ${day === 1 ? "col-start-4" : ""}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
