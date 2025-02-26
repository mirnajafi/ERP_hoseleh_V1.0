'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";

const register = () => {

    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };
    return (
        <div className="w-full flex flex-col">
            <div className="w-full p-2">
                <Dropdown
                    label="نام باشگاه"
                    options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                    onSelect={handleSelect}
                />
                <Dropdown
                    label="نام باشگاه"
                    options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                    onSelect={handleSelect}
                />

            </div>


            <div className="w-full p-2 flex flex-row">
                <Input
                    label="نام و نام خانوادگی"
                    type="email"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: امیر محمدی"
                    name="fullName"
                />

                <Input
                    label="شماره تماس"
                    type="email"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: امیر محمدی"
                    name="fullName"
                />

                <Input
                    label="کشور"
                    type="email"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: امیر محمدی"
                    name="fullName"
                />

                <Input
                    label="" "
                    type="email"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: امیر محمدی"
                    name="fullName"
                />




            </div>
        </div>
    );
};

export default register;
