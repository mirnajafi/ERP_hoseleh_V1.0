'use client';


import PageHeader from "@/components/formHeader/formHeader";
import Tabs from "@/components/formTab/formTab";
import PersonalInfo from "@/components/personalInfo/personalInfo";
import RecognitionEvaluator from "@/components/recognitionEvaluator/recognitionEvaluator";


const Register = () => {


    const tabItems = [
        {
            label: "اطلاعات فردی", content: <PersonalInfo />
        },
        {
            label: "تشخیص ارزیاب", content: <RecognitionEvaluator />
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
