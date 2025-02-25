'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";

const register = () => {

    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };
    return (
        <div className="w-full flex flex-col">
            <div className="w-full p-2 m-2">
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


            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
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
            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
                <Input
                    label="سال تولد"
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 1370"
                />
                <Dropdown
                    label="رده سنی"
                    options={["مرد", "زن"]}
                    onSelect={handleSelect}
                />

                <Input
                    label="شغل"
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: کارمند"
                />
                <Input
                    label="کدمعرف"
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: HJV"
                />
            </div>

            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
                <Input
                    label="قد"
                    type="tsxt"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 179 "
                />

                <Input
                    label="وزن"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 82 "
                />

                <Input
                    label="وزن دلخواه"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 65"
                />

                <Input
                    label="شاخص توده بدنی"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 25"
                />
            </div>
            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
                <Dropdown
                    label="سابقه بیماری"
                    options={["گزینه 1", " "]}
                    onSelect={handleSelect}
                />


                <Input
                    label="وزن"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 82 "
                />

                <Input
                    label="وزن دلخواه"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 65"
                />

                <Input
                    label="شاخص توده بدنی"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 25"
                />
            </div>
        </div>
    );
};

export default register;
