import PageTitle from "@/components/common/PageTitle";
import FiltersList from "./FiltersList/FiltersList";
import SearchInput from "./SearchInput/SearchInput";
import DataTable from "./DataTable/DataTable";

export default function RightSection() {
  return (
    <div className="flex-1 pl-4">
      <PageTitle title="حانیه دانیال (چالش ها)" />

      <div className="pr-2">
        <div className="flex justify-between items-center">
          <FiltersList />

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 font-medium">3 مورد</span>
            <SearchInput />
          </div>
        </div>

        <DataTable /> 
      </div>
    </div>
  );
}
