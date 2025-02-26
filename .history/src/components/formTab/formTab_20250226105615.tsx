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
      {/* نوار تب‌ها */}
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium focus:outline-none ${
              activeIndex === index
                ? "border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای تب فعال */}
      <div className="">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
