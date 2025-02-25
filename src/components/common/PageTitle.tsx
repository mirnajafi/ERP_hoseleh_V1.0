interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <div className="flex-1 h-[2px] bg-gray-200 mt-[2px]" />
    </div>
  );
}
