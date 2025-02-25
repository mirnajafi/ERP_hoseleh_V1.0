/* eslint-disable @next/next/no-img-element */
export default function SearchInput() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="جستجو..."
        className="w-[280px] h-9 bg-white border border-gray-200 pb-1 rounded-lg px-4 text-sm focus:outline-none"
      />
      <img
        src="/icons/left-icon.svg"
        alt="search"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7"
      />
    </div>
  );
} 