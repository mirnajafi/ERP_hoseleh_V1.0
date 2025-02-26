'use client';  // اضافه کردن این خط برای فعال کردن کامپوننت در Client-side


import Dropdown from "@/components/dropdown/dropdown";
import PageHeader from "@/components/formHeader/formHeader";
import Tabs from "@/components/formTab/formTab";
import Input from "@/components/input/input";
import InputDate from "@/components/inputDate/inputDate";
import TransparentBtn from "@/components/transparentBtn/TransparentBtn";

const register = () => {

    const handleSelect = (option: string) => {
        console.log("انتخاب شده:", option);
    };

    const tabItems = [
        { label: "اطلاعات فردی", content: <div></div> },
        { label: "", content:  },
        { label: "", content:  },
        { label: "", content:  },
        { label: "", content:  },
        { label: "", content:  },

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

export default register;
