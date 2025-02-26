import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-sm font-medium focus:outline-none ${
              activeIndex === index
                ? "border-b-2 border-[#FF7101] text-[#FF7101]"
                : "text-gray-500 hover:text-[#FF7101]"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
