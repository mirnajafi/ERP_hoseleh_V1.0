import { notFound } from 'next/navigation';

// Define the content for each box
const boxContent: { [key: string]: string } = {
  'تعریف-کلاس-ها': 'This is the content for تعریف کلاس ها.',
  'تعریف-خدمات': 'This is the content for تعریف خدمات.',
  'تعریف-پکیج': 'This is the content for تعریف پکیج.',
  'تعریف-واحد-تغذیه': 'This is the content for تعریف واحد تغذیه.',
  'نمایش-کلاس-ها': 'This is the content for نمایش کلاس ها.',
  'نمایش-خدمات': 'This is the content for نمایش خدمات.',
  'نمایش-پکیج': 'This is the content for نمایش پکیج.',
  'نمایش-واحد-تغذیه': 'This is the content for نمایش واحد تغذیه.',
};

export default function BoxPage({ params }: { params: { boxName: string } }) {
  const content = boxContent[params.boxName];

  if (!content) {
    notFound(); // Show a 404 page if the boxName is invalid
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{params.boxName.replace(/-/g, ' ')}</h1>
      <p>{content}</p>
    </div>
  );
}