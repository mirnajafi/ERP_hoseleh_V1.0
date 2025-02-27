import Link from 'next/link';
import { ReactNode } from 'react';

// Define the names of the 8 boxes
const boxNames = [
  'تعریف کلاس ها',
  'تعریف خدمات',
  'تعریف پکیج',
  'تعریف واحد تغذیه',
  'نمایش کلاس ها',
  'نمایش خدمات',
  'نمایش پکیج',
  'نمایش واحد تغذیه',
];

export default function ClassificationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen p-4">
      {/* Top Section: Navigation Boxes */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {boxNames.map((name, index) => (
          <Link
            key={index}
            href={`/classification/${name.replace(/\s+/g, '-')}`} // Convert spaces to dashes for URLs
            className="p-4 text-center rounded-lg bg-white text-black font-bold hover:bg-orange-500 hover:bg-orange hover:text-white transition-colors duration-200"
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Bottom Section: Dynamic Content */}
      <div className="flex-1 bg-gray-100 p-4 rounded-lg">
        {children}
      </div>
    </div>
  );
}