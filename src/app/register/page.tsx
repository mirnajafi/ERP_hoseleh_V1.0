'use client';


import PageHeader from "@/components/formHeader/formHeader";
import Tabs from "@/components/formTab/formTab";
<<<<<<< HEAD
import PersonalInfo from "@/components/personalInfo/personalInfo";
import RecognitionEvaluator from "@/components/recognitionEvaluator/recognitionEvaluator";
import Registration from "@/components/registration/registration";
=======
import Input from "@/components/input/input";
import InputDate from "@/components/inputDate/inputDate";
import InputDescription from "@/components/inputDescription/inputDescription";
import TransparentBtn from "@/components/transparentBtn/transparentBtn";
>>>>>>> d6a410e50ce4c8ee5d960d537fd3c3f66e93fc3c


const Register = () => {


    const tabItems = [
        {
            label: "اطلاعات فردی", content: <PersonalInfo />
        },
        {
            label: "تشخیص ارزیاب", content: <RecognitionEvaluator />
        },
        { label: "تجویز پزشک", content: <div></div> },
        { label: "ثبت نام", content: <Registration/> },
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
