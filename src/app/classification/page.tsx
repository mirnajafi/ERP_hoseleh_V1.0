"use client";

import { useState, lazy, Suspense } from "react";
import PageHeader from "@/components/formHeader/formHeader";
import dynamic from "next/dynamic";
import LeftSection from "@/containers/Chalenges/LeftSection/LeftSection";
import { cardio } from "ldrs";

cardio.register();

// Lazy loading components
const ClassDefinition = lazy(() => import("./[boxName]/classes-exp/page"));
const ServiceDefinition = lazy(() => import("./[boxName]/services-exp/page"));
const PackageDefinition = lazy(() => import("./[boxName]/package-exp/page"));
const NutritionUnitDefinition = lazy(() => import("./[boxName]/food-exp/page"));
const ClassDisplay = lazy(() => import("./[boxName]/classes/page"));
const ServiceDisplay = lazy(() => import("./[boxName]/services/page"));
const PackageDisplay = lazy(() => import("./[boxName]/package/page"));
const NutritionUnitDisplay = lazy(() => import("./[boxName]/food/page"));

const Classification = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = [
    { label: "تعریف کلاس ها", content: <ClassDefinition /> },
    { label: "تعریف خدمات", content: <ServiceDefinition /> },
    { label: "تعریف پکیج", content: <PackageDefinition /> },
    { label: "تعریف واحد تغذیه", content: <NutritionUnitDefinition /> },
    { label: "نمایش کلاس ها", content: <ClassDisplay /> },
    { label: "نمایش خدمات", content: <ServiceDisplay /> },
    { label: "نمایش پکیج", content: <PackageDisplay /> },
    { label: "نمایش واحد تغذیه", content: <NutritionUnitDisplay /> },
  ];

  return (
    <div className="w-full flex flex-col p-4">
      {/* Layout: Left Sidebar & Right Tabs Section */}
      <div className="flex w-full">
        {/* Left Section */}
        <div className="w-[270px] fixed left-4">
          <LeftSection />
        </div>

        {/* Right Section: Tabs & Active Title */}
        <div className="flex-1 ml-[280px] flex flex-col">
          {/* Tab Navigation */}
          <div className="grid grid-cols-4 max-w-3xl max-h gap-4 mb-4 self-start relative">
  {tabItems.map((tab, index) => (
    <button
      key={index}
      onClick={() => setActiveTab(index)}
      className={`relative overflow-hidden p-4 text-start rounded-lg font-bold transition-colors duration-200 ${
        activeTab === index
          ? "bg-orange text-white"
          : "bg-white text-black hover:text-orange hover:scale-110 transition-all duration-200 ease-linear"
      }`}
    >
      {/* Background Light Balls */}
      <div className="absolute  top-[-8px] left-[-12px] w-12 h-12 bg-gray-200 opacity-20 rounded-full hover:blur-md hover:animate-pulse"></div>
      <div className="absolute top-[-15px] left-[-8px] w-12 h-12 bg-gray-100 opacity-25 rounded-full hover:blur-md hover:animate-pulse"></div>
      <div className="absolute bottom-[-13px] right-[-16px] w-14 h-14 bg-gray-300 opacity-15 rounded-full hover:blur-md  hover:animate-pulse"></div> 

      {tab.label}
    </button>
  ))}
</div>


          {/* Tab Content */}
          <div className=" mt-16 flex-1 bg-gray-100 p-4 rounded-lg">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-32">
                  <l-cardio size="50" stroke="4" speed="1" color="red"></l-cardio>
                </div>
              }
            >
              {tabItems[activeTab].content}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classification;
