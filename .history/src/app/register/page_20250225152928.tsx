import Dropdown from "@/components/dropdown/dropdown";

const register = () => {

    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
      };
    return (
        <div>
            <h2>ثبت‌نام</h2>
            <Dropdown
        label="انتخاب یک گزینه"
        options={["گزینه 1", "گزینه 2", "گزینه 3"]}
        onSelect={handleSelect}
      />
        </div>
    );
};

export default register;
