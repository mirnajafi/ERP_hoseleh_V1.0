'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";
import FileUploader from "@/components/fileUploader/fileUploader";
import PageHeader from "@/components/formHeader/formHeader";
import Tabs from "@/components/formTab/formTab";
import CopyIcon from "@/components/icons/copy";
import TrashIcon from "@/components/icons/trash";
import InformationUserBox from "@/components/informationUserBox/informationUserBox";
import Input from "@/components/input/input";
import InputDate from "@/components/inputDate/inputDate";
import InputDescription from "@/components/inputDescription/inputDescription";
import TransparentBtn from "@/components/transparentBtn/transparentBtn";
import WeekTable from "@/components/weekTable/weekTable";
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


    const [selectedDay, setSelectedDay] = useState<string>("");

    const handleDaySelect = (day: string) => {
        setSelectedDay(day);
    };


    const tabItems = [
        {
            label: "اطلاعات فردی", content:<Per
           
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
                            label="سایر خدمات"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />
                        <TransparentBtn label='افزودن' />

                    </div>
                    <div className="flex flex-col  w-ful xl:w-1/3 my-4">
                        <label className="mb-2 text-xs font-bold text-gray-700">مربی های پیشنهادی ارزیاب</label>
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

                    <div className="flex flex-row  my-4 items-center">
                        <label className="mb-2 text-xs font-bold text-gray-700 ml-2">برنامه تمرینی</label>
                        <button className="bg-[#FFF6F7] h-10 w-10 border rounded-lg border-[#FF7101] flex justify-center items-center ml-2"><TrashIcon width={25} height={25} /></button>
                        <button className="bg-[#FFF6F7] h-10 w-10 border rounded-lg border-[#FF7101] flex justify-center items-center"><CopyIcon width={25} height={25} /></button>

                    </div>

                    <WeekTable
                        apiUrl="https://api.majidvalizadeh.com/jalali/next7" // URL برای API تاریخ‌ها
                        selectedDay={selectedDay}
                        onDaySelect={handleDaySelect}
                    />

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
