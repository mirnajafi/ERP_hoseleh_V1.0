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


            <div className="w-full p-2 flex flex-col xl:flex-row">
                <Input
                    label="نام و نام خانوادگی"
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: امیر محمدی"
                />

                <Input
                    label="شماره تماس"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 09372758024 "
                />

                <Input
                    label="کشور"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: ایران"
                />

                <Input
                    label="کد ملی"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 096"
                />

                <Input
                    label="شماره بیمه ورزشی"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 1685966"
                />


            </div>
            <div className="w-full p-2 flex flex-col xl:flex-row">
            <Input
                    label="سال تولد "
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: سزارین"
                />
                <Dropdown
                    label="جنسیت"
                    options={["مرد", "زن"]}
                    onSelect={handleSelect}
                />

             
                <Input
                    label="تعداد فرزندان"
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 2 فرزند"
                />
            </div>

            <div className="w-full p-2 flex flex-col xl:flex-row">

            </div>

        </div>
    );
};

export default register;
