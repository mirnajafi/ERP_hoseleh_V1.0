'use client';


interface PageHeaderProps {
    title: string;
    onEdit: () => void;
    onDelete: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onEdit, onDelete }) => {
    return (
        <div className="flex items-center justify-between w-full  pb-2">
            <h2 className="text-xl font-semibold text-nowrap ml-2">{title}</h2>
            <div className="flex items-center gap-4 w-full ">
                <div className="flex-1 w-full border-t border-gray-300 "></div>
                <button className="" onClick={onEdit}>
                    ویرایش
                </button>
                <button className="customeG" onClick={onDelete}>
                    ثبت اطلاعات
                </button>
            </div>
        </div>
    );
};

export default PageHeader;
