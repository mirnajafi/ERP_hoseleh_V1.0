'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";

const register = () => {

    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };
    return (
        <div className="w-full">
            <h2>ثبت‌نام</h2>
            <Dropdown
                label="ه"
                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                onSelect={handleSelect}
            />
        </div>
    );
};

export default register;
