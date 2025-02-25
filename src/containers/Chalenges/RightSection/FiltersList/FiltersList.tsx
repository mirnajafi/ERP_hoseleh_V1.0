import FiltersListItem from "./FiltersListItem";

const filters = [
  {
    id: 1,
    title: "همه(95)",
    isActive: true,
  },
  {
    id: 2,
    title: "فعال(50)",
    isActive: false,
  },
  {
    id: 3,
    title: "انجام‌شده(5)",
    isActive: false,
  },
];

export default function FiltersList() {
  return (
    <ul className="flex items-center gap-3 text-sm text-gray-600 font-medium">
      {filters.map((filter) => (
        <FiltersListItem
          key={filter.id}
          title={filter.title}
          isActive={filter.isActive}
        />
      ))}
    </ul>
  );
}
