import Input from "@/components/input/input";
import Dropdown from "@/components/dropdown/dropdown";
import InputDescription from "@/components/inputDescription/inputDescription";
import { FaCheck } from "react-icons/fa";
import SubmitButton from "@/components/submitButton/submitbutton"


export default function DefineClassesPage() {
    return (


<div>
      {/* Title & Line */}
      <div className="flex items-center justify-between w-full pb-2">
        <h2 className="text-2xl font-bold mb-4 text-nowrap">تعریف و ظرفیت‌گذاری کلاس های باشگاه
        </h2>
        <div className="w-full">
          <div className="flex-1 w-full mb-4 border-t border-gray-300">
          </div>
        </div>
      </div>

        
        <div className="">
                              <div className="flex flex-nowrap">
                              <Input
                                      label="نام باشگاه"
                                      type="text"
                                      value={''}
                                      onChange={() => { }}
                                      placeholder="بنیاد سلامت"
                                      className="xl:w-3/6"
                              />
                              <Input
                                      label="ساعت فعالیت"
                                      type="text"
                                      value={''}
                                      onChange={() => { }}
                                      placeholder="از ساعت 08:00"
                              />
                              <Input
                                      label=" "
                                      type="text"
                                      value={''}
                                      onChange={() => { }}
                                      placeholder="تا ساعت 20:00"
                                      className=" pt-6"
                              />
                              <Input
                                      label="تعداد کمد ها"
                                      type="text"
                                      value={''}
                                      onChange={() => { }}
                                      placeholder="105"
                                      className="xl:w-2/6 max-w-[500px]"
                              />
                              <InputDescription
                                      label="آدرس دقیق"
                                      value={''}
                                      placeholder="محله سجاد شهر"
                                      className=" max-w-[500px]"
                              />
                              </div>

                              <div className=" w-full flex justify-start mt-4">
                              <SubmitButton
                              label="ثبت باشگاه "
                              icon={<FaCheck />}  
                              />
</div>


        </div>


</div>
    );
  }