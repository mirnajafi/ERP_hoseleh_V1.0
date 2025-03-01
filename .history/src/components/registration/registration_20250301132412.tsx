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
import InputDate from "../inputDate/inputDate";
import PriceBox from "../priceBox/priceBox";
import RecommendedCourse from "../recommendedCourse/recommendedCourse";
import RecommendedServices from "../recommendedServices/recommendedServices";

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

            <div className="w-full flex flex-col-reverse xl:flex-row">

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


                    <div className="w-full xl:py-2 my-0  flex flex-col  border border-[#F53E5E] rounded-[8px] p-[8px] bg-[#FFF9FA]">
                        <label className="text-xs font-bold text-gray-700 ml-4">تست های انجام شده</label>

                        <div className="flex flex-col xl:flex-row">
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

                    <div className="flex flex-col  w-full xl:items-start xl:justify-right ">
                        <label className="text-xs font-bold text-gray-700 ml-4 mt-4">کلاس های ثبت نامی</label>
                        <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                        <Dropdown
                                label=" نام باشگاه"
                                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                                onSelect={handleSelect}
                            />
                            <Dropdown
                                label="نوع کلاس"
                                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                                onSelect={handleSelect}
                            />
                            <Dropdown
                                label="تعداد جلسه در هفته"
                                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                                onSelect={handleSelect}
                            />
                            <Dropdown
                                label="تعداد ماه"
                                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                                onSelect={handleSelect}
                            />
                            <TransparentBtn label='افزودن' />
                        </div>
                    </div>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                            <Dropdown
                                label="سایر خدمات"
                                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                                onSelect={handleSelect}
                            />

                            <Dropdown
                                label="تعداد"
                                options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                                onSelect={handleSelect}
                            />
                            <TransparentBtn label='افزودن' />
                    </div>


                    <label className="text-xs font-bold text-gray-700 ml-4 mt-4">مالی و پرداخت‌ها</label>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row items-start bg-white rounded-[8px] my-2">
                        <PriceBox title={"مبلغ کلاس و خدمات:"} price={"7,800,000 ریال"} priceText={"هفتصد هزار تومان"} />

                        <Dropdown
                            label="درصد تخفیف"
                            options={["گزینه 1", "گزینه 2", "گزینه 3"]}
                            onSelect={handleSelect}
                        />

                        <PriceBox title={"مبلغ تخفیف:"} price={"7,800,000 ریال"} priceText={"هفتصد هزار تومان"} />

                        
                        <PriceBox title={'مبلغ کل بعد از تخفیف:'} price={"7,800,000 ریال"} priceText={"هفتصد هزار تومان"} />



                    </div>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                        <Input
                            label="مبلغ دریافتی"
                            type="number"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: 324325"
                        />
                        <InputDate label='تاریخ دریافت' onChange={() => { }} placeholderDay={"روز"} placeholderMonth={"ماه"} placeholderYear={"سال"} />

                        <Dropdown
                            label="نحوه پرداخت"
                            options={["نوجوان", "جوان"]}
                            onSelect={handleSelect}
                        />
                        <Dropdown
                            label="شماره کارت واریز شده"
                            options={["نوجوان", "جوان"]}
                            onSelect={handleSelect}
                        />
                    </div>

                    <div className="w-full xl:py-2  my-0 flex flex-col xl:flex-row">
                        <Input
                            label="مبلغ بدهی"
                            type="number"
                            value={''}
                            onChange={() => { }}
                            placeholder="مثال: 324325"
                        />
                        <InputDate label='تاریخ تسویه' onChange={() => { }} placeholderDay={"روز"} placeholderMonth={"ماه"} placeholderYear={"سال"} />
                        <TransparentBtn label='افزودن' />




                    </div>



                    <RadioButton label={"درصورت عدم ثبت نام و پرداخت شهریه ارسال شود برای پیگیری"} name={""} value={""} checked={false} onChange={() => { }} />


                </div>

                <div className="xl:w-1/6 p-2 flex flex-col">
                    <button className="bg-[#3B3E4B] text-white p-4 w-full border rounded-[8px] my-2">نمایش دوره‌ها</button>
                    <button className="bg-transparent text-[#007F63]  p-4 w-full border-2 border-[#007F63] rounded-[8px] flex items-center justify-center font-bold my-2"><PlusIcon width={20} height={20} /> ثبت دوره جدید</button>
                    <LeftSideBox title={"تست های انجام شده"} test1={"بادی کامپوزیشن"} />

                    <RecommendedCourse title={"دوره‌های پیشنهادی ارزیاب"} name={"کلاس EMS"}/>
                    <RecommendedServices title={"خدمات پیشنهادی ارزیاب"}/>
                </div>
            </div>






        </div>
    )

}
export default Registration;