import Select from "react-select/base";
import TrashIcon from "../icons/trash";
import WeekTable from "../weekTable/weekTable";
import TransparentBtn from "../transparentBtn/transparentBtn";
import Dropdown from "../dropdown/dropdown";
import InputDescription from "../inputDescription/inputDescription";
import FileUploader from "../fileUploader/fileUploader";
import Input from "../input/input";
import InformationUserBox from "../informationUserBox/informationUserBox";
import { useState } from "react";
import CopyIcon from "../icons/copy";
import ResultBox from "../resultBox/resultBox";

const Registration = () => {

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

    return (
        <div>
            <div className="w-full flex flex-row">
                <InformationUserBox name="حانیه دانیال" age="23" phoneNumber={'9369491942'} evaluator="دکتر حوصله" debt="25000" imageSrc="/images/defaultUser.png" className="w-1/2 lg:ml-2" />
                <ResultBox resultText={"حانیه دانیال نیاز به برنامه بازتوانی acl دارد"} className="w-1/2 lg:mr-2" />
            </div>


            
            <div className="flex flex-row  my-4 items-center">
                <label className="mb-2 text-xs font-bold text-gray-700 ml-2">برنامه تمرینی با توجه به تشخیص ارزیاب</label>
             
            </div>

           <div className="flex fle"></div>

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


        </div>
    )

}
export default Registration;