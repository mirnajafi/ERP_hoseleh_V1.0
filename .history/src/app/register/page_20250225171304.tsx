'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";

const register = () => {

    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };
    return (
        <div className="w-full flex flex-col">
            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
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
                    options={["ندارد", "دارد"]}
                    onSelect={handleSelect}
                />


                <Input
                    label="نوع بیماری"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: روماتیسم "
                />

                <Input
                    label="مصرف داروی خاص"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال:پرونیزولون"
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
                    label="سابقه آسیب های مفصلی"
                    options={["ندارد", "دارد"]}
                    onSelect={handleSelect}
                />


                <Input
                    label="نوع بیماری"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: روماتیسم "
                />

                <Input
                    label="نوع آسیب"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال:تعویض مفصل زانو"
                />

                <Input
                    label="توضیحات"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder=""
                    className="xl:w-1/4 max-w-[500px]"
                />
            </div>

            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
                <Dropdown
                    label="سابقه جراحی"
                    options={["ندارد", "دارد"]}
                    onSelect={handleSelect}
                />


                <Input
                    label="نوع بیماری"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: روماتیسم "
                />

                <Input
                    label="نوع جراحی"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال:تعویض مفصل زانو"
                />

                <Input
                    label="پزشک جراح"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder=""
                />
            </div>
            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
                <Dropdown
                    label="سابقه سانحه یا تصادف"
                    options={["ندارد", "دارد"]}
                    onSelect={handleSelect}
                />

                <Input
                    label="توضیحات"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder=""
                    className="xl:w-1/4 max-w-[500px]"
                />

            </div>

            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
                <Input
                    label="رشته ورزشی"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: فوتبال "
                />

                <Input
                    label="چند جلسه در هفته"
                    type="number"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: 6جلسه "
                />

                <Input
                    label="در چه سطحی ورزش میکنی؟"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder="مثال: حرفه ای"
                />

            </div>

            <div className="w-full p-2 m-2 flex flex-col xl:flex-row">
            <Dropdown
                    label="نحوه آشنایی"
                    options={["ندارد", "دارد"]}
                    onSelect={handleSelect}
                />

                <Input
                    label="توضیحات"
                    type="text"
                    value={''}
                    onChange={() => { }}
                    placeholder=""
                    className="xl:w-1/4 max-w-[500px]"
                />
            </div>
        </div>
    );
};

export default register;
