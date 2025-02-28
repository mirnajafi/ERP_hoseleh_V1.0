import Select from "react-select/base";
import WeekTable from "../weekTable/weekTable";
import TransparentBtn from "../transparentBtn/transparentBtn";
import Dropdown from "../dropdown/dropdown";
import InputDescription from "../inputDescription/inputDescription";
import FileUploader from "../fileUploader/fileUploader";
import Input from "../input/input";
import InformationUserBox from "../informationUserBox/informationUserBox";
import { useState } from "react";
import ResultBox from "../resultBox/resultBox";
import PlusIcon from "../icons/plus";
import LeftSideBox from "../leftSideBox/leftSideBox";
import RadioButton from "../radioBtn/radioBtn";

const Registration = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);


    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };
    const handleFileUpload = (files: File[]) => {
        console.log("فایل‌های آپلود شده:", files);
    };

    const [selected, setSelected] = useState<string>("option1");


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

            <div className="w-full flex flex-row">

                <div className="w-full flex flex-col">
                    <WeekTable
                        apiUrl="https://api.majidvalizadeh.com/jalali/next7"
                        selectedDay={selectedDay}
                        onDaySelect={handleDaySelect}
                    />
                    <div className="flex flex-row my-4">
                        <label className="my-2 text-xs font-bold text-gray-700 ml-4">نوع مراجعه:</label>
                        <RadioButton
                            label="حضوری"
                            name="options"
                            value="option1"
                            checked={selected === "option1"}
                            onChange={setSelected}
                        />
                        <RadioButton
                            label="آنلاین"
                            name="options"
                            value="option2"
                            checked={selected === "option2"}
                            onChange={setSelected}
                        />
                        <RadioButton
                            label="حضوری-آنلاین"
                            name="options"
                            value="option3"
                            checked={selected === "option3"}
                            onChange={setSelected}
                        />
                    </div>


                    <div className="w-full xl:py-2 my-0  flex flex-col xl:flex-row xl:justify-start xl:items-end border border-[#F53E5E] rounded-[8px] ">
                        <label className="my-2 text-xs font-bold text-gray-700 ml-4">تست های انجام شده</label>

                        <Input
                            label="نام تست"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder=""
                        />
                        <Input
                            label="تعداد "
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder=""
                        />

                        <Input
                            label="مبلغ قابل پرداخت"
                            type="text"
                            value={''}
                            onChange={() => { }}
                            placeholder=""
                        />
                    </div>
                </div>

                <div className="w-1/6 p-2 flex flex-col">
                    <button className="bg-[#3B3E4B] text-white p-4 w-full border rounded-[8px] my-2">نمایش دوره‌ها</button>
                    <button className="bg-transparent text-[#007F63] text-white p-4 w-full border-2 border-[#007F63] rounded-[8px] flex items-center justify-center font-bold my-2"><PlusIcon width={20} height={20} /> ثبت دوره جدید</button>
                    <LeftSideBox title={"تست های انجام شده"} test1={"بادی کامپوزیشن"} />
                </div>
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