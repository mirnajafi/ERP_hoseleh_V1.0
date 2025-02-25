"use client";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

export default function Chalenges() {
  return (
    <div className="flex gap-6">
      <RightSection />

      <div className="w-[270px]">
        <LeftSection />
      </div>
    </div>
  );
}
