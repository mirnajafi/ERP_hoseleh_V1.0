/* eslint-disable @next/next/no-img-element */
"use client";

import SearchInput from "../SearchInput/SearchInput";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import SidebarToggle from "../sidebar/SidebarToggle";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="h-16 bg-secondry-blue-900 shadow-sm fixed top-0 left-0 right-0 flex items-center justify-between px-6 overflow-hidden z-50">
      <img
        src="/icons/pattern.svg"
        alt="logo"
        className="h-20 absolute -right-2 top-1"
      />
      
      {/* Right Side Group */}
      <div className="flex items-center gap-3 pr-8">
        <SidebarToggle setIsOpen={setIsSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} bgColor="bg-gray-900" />
        <img
          src="/icons/logo.svg"
          alt="logo"
          className="h-8 brightness-0 invert"
        />
        <h1 className="text-white text-lg font-bold">بنیاد سلامت دکتر حوصله</h1>
      </div>

      {/* Left Side Group */}
      <div className="flex items-center gap-6">
        <SearchInput />

        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/icons/notification.svg"
              alt="notifications"
              className="w-6 h-6 cursor-pointer"
            />
            <span className="absolute top-[3px] border border-white right-[3px] w-[7px] h-[7px] bg-red-500 rounded-full"></span>
          </div>
          <div className="w-px h-5 bg-white/20" />
          <button className="flex items-center gap-2 text-white">
            <img src="/icons/out.svg" alt="logout" className="w-6 h-6" />
            <span className="text-sm">خروج</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
