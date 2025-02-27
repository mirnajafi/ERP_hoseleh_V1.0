'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";
import FileUploader from "@/components/fileUploader/fileUploader";
import PageHeader from "@/components/formHeader/formHeader";
import Tabs from "@/components/formTab/formTab";
import InformationUserBox from "@/components/informationUserBox/informationUserBox";
import Input from "@/components/input/input";
import InputDate from "@/components/inputDate/inputDate";
import InputDescription from "@/components/inputDescription/inputDescription";
import TransparentBtn from "@/components/transparentBtn/transparentBtn";
import { useState } from "react";
import Select from "react-select";

const Register = () => {


    const [selectedOptions, setSelectedOptions] = useState([]);


    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };
    const handleFileUpload = (files: File[]) => {
        console.log("فایل‌های آپلود شده:", files);
    };
    const tabItems = [
        {
            label: "اطلاعات فردی", content:
                <div>
                    <div className="w-full xl:py-2 my-0 flex flex-col xl:flex-row">
                        <Dropdown
                            label="نام باشگاه"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                        <Dropdown
                            label="نام باشگاه ثبت نامی"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                    </div>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row xl:items-end">
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
                        <TransparentBtn label='افزودن' />

                    </div>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                        <Input
                            label="سال تولد"
                            type="number"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: 1370"
                        />
                        <Dropdown
                            label="رده سنی"
                            options={["نوجوان", "جوان"]}
                            onSelect={handleSelect}
                        />

                        <Input
                            label="شغل"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: کارمند"
                        />
                        <Input
                            label="کدمعرف"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: HJV"
                        />
                    </div>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                        <Input
                            label="قد"
                            type="number"
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
                            type="number"
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

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                        <Dropdown
                            label="سابقه بیماری"
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

                    <div className="w-full xl:py-2 my-0  flex flex-col xl:flex-row xl:justify-start xl:items-end">
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

                        <InputDescription
                            label="توضیحات"
                            value={''}
                            placeholder=""
                            className="xl:w-1/4 max-w-[500px]"
                        />
                        <TransparentBtn label='افزودن' />

                    </div>

                    <div className="w-full xl:py-2 my-0  flex flex-col xl:flex-row xl:justify-start xl:items-end">
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
                        <InputDate label='تاریخ جراحی' onChange={() => { }} placeholderDay={"روز"} placeholderMonth={"ماه"} placeholderYear={"سال"} />


                        <Input
                            label="پزشک جراح"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder=""
                        />
                        <TransparentBtn label='افزودن' />

                    </div>

                    <div className="w-full xl:py-2 my-0  flex flex-col xl:flex-row xl:justify-start xl:items-end">
                        <Dropdown
                            label="سابقه سانحه یا تصادف"
                            options={["ندارد", "دارد"]}
                            onSelect={handleSelect}
                        />
                        <InputDate label='تاریخ سانحه یا تصادف' onChange={() => { }} placeholderDay={"روز"} placeholderMonth={"ماه"} placeholderYear={"سال"} />
                        <InputDescription
                            label="توضیحات"
                            value={''}
                            placeholder=""
                            className="xl:w-1/4 max-w-[500px]"
                        />
                        <TransparentBtn label='افزودن' />


                    </div>

                    <div className="w-full xl:py-2 my-0  flex flex-col xl:flex-row xl:justify-start xl:items-end">
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
                        <TransparentBtn label='افزودن' />

                    </div>

                    <div className="w-full  xl:py-2 my-0 xl:my-2  flex flex-col xl:flex-row">
                        <Dropdown
                            label="نحوه آشنایی"
                            options={["ندارد", "دارد"]}
                            onSelect={handleSelect}
                        />

                        <InputDescription
                            label="توضیحات"
                            value={''}
                            placeholder=""
                            className="xl:w-1/4 max-w-[500px]"
                        />
                    </div>
                </div>
        },
        {
            label: "تشخیص ارزیاب", content:
                <div>
                    <InformationUserBox name="حانیه دانیال" age="23" phoneNumber={'9369491942'} evaluator="دکتر حوصله" imageSrc="/images/defaultUser.png" />

                    <div className="w-full xl:py-2 my-0  flex flex-col xl:flex-row xl:justify-start xl:items-end">

                        <Dropdown
                            label="وضعیت بدن"
                            options={["ندارد", "دچار آسیب"]}
                            onSelect={handleSelect}
                        />
                        <Input
                            label="نوع آسیب"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: آسیب در زانو "
                        />
                        <Dropdown
                            label="میزان درد"
                            options={["1", "2"]}
                            onSelect={handleSelect}
                        />
                        <InputDescription
                            label="توضیحات"
                            value={''}
                            placeholder=""
                            className="xl:w-1/4 max-w-[500px]"
                        />
                        <TransparentBtn label='افزودن' />

                    </div>
                    <div className="flex flex-col  w-ful xl:w-1/3">
                        <label className="mb-2 text-xs font-bold text-gray-700">تمرکز روی کدام قسمت بدن؟</label>
                        <Select
                            isMulti
                            options={[
                                { value: "apple", label: "سیب" },
                                { value: "banana", label: "موز" },
                                { value: "orange", label: "پرتقال" },
                                { value: "grape", label: "انگور" },
                                { value: "watermelon", label: "هندوانه" },
                            ]}
                            value={selectedOptions}
                            onChange={setSelectedOptions}
                            placeholder="یک یا چند مورد را انتخاب کنید..."
                            noOptionsMessage={() => "موردی یافت نشد"}
                            isClearable
                            isSearchable
                            className="text-xs "
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    borderRadius: "8px",
                                    borderColor: "#ccc",
                                    boxShadow: "none",
                                    "&:hover": { borderColor: "#888" },
                                }),
                            }}
                        />
                    </div>
                    <div className="flex flex-col xl:flex-row w-full xl:items-end xl:justify-right ">
                        <Input
                            label="تست ها"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: بادی کامپوزیشن "
                        />
                        <InputDescription
                            label="نتیجه تست"
                            value={''}
                            placeholder=""
                            className="xl:w-1/4 max-w-[500px]"
                        />

                        <FileUploader onFileUpload={handleFileUpload} accept="image/*" multiple />
                        <TransparentBtn label='افزودن' />
                    </div>
                    <div className="flex flex-col xl:flex-row w-full xl:items-end xl:justify-right ">

                        <InputDescription
                            label="نتیجه ارزیابی و مشاوره"
                            value={''}
                            placeholder="توضیحات..."
                            className="xl:w-1/2 max-w-[500px]"
                            height="h-24"
                        />

                    </div>

                    <div className="flex flex-col xl:flex-row w-full xl:items-end xl:justify-right ">
                        <Dropdown
                            label="نوع کلاس"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                        <Dropdown
                            label="تعداد کل جلسات"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                        <Dropdown
                            label="تعداد ماه"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                        <Dropdown
                            label="تعداد جلسه در هفته"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                        <TransparentBtn label='افزودن' />

                    </div>
                    <div className="flex flex-col xl:flex-row w-full xl:items-end xl:justify-right ">
                        <Dropdown
                            label="نوع کلاس"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        /></div>


                </div>
        },
        { label: "تجویز پزشک", content: <div></div> },
        { label: "ثبت نام", content: <div></div> },
        { label: "کلاس بندی", content: <div></div> },
        { label: "اطلاعات تصویری", content: <div></div> },
        { label: "برنامه تمرینی", content: <div></div> },
        { label: "برنامه غذایی", content: <div></div> },
        { label: "تست ها", content: <div></div> },
        { label: "برنامه سلامت روان", content: <div></div> },
        { label: "رضایت مندی", content: <div></div> },
        { label: "مالی", content: <div></div> },
    ];

    return (
        <div className="w-full flex flex-col">



            <PageHeader
                title="مراحل ثبت نام کاربر"
                onEdit={() => console.log("ویرایش")}
                onDelete={() => console.log("حذف")}
            />

            <Tabs tabs={tabItems} />


        </div>
    );
};

export default Register;
