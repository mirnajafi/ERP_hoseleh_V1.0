/* eslint-disable @next/next/no-img-element */
"use client";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export default function SearchInput({ placeholder = "جستجو کن...", className = "" }: SearchInputProps) {
  return (
    <div className="relative w-[280px]">
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full h-9 bg-[#364972] rounded-lg px-4 text-white/70 text-sm focus:outline-none ${className}`}
      />
      <img
        src="/icons/left-icon.svg"
        alt="search"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 brightness-0 invert"
      />
    </div>
  );
} 