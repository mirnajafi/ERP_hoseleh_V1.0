'use client';
import './formHeader.css'

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
                <button className="text-sm flex flex-row aligns-center justify-center" onClick={onEdit}>
                    

                    <svg width="17" height="17" viewBox="0 0 23 23" className='m' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5324 1.51563C18.1783 0.161458 15.9827 0.161458 14.6286 1.51563L12.4546 3.68958C12.5391 3.86026 12.6305 4.03984 12.7285 4.22604C13.3883 5.47917 14.3142 6.96623 15.424 8.07604C16.5338 9.18585 18.0209 10.1118 19.274 10.7715C19.4602 10.8695 19.6397 10.9609 19.8104 11.0454L21.9844 8.87144C23.3385 7.51727 23.3385 5.32173 21.9844 3.96756L19.5324 1.51563ZM18.1392 12.7166C16.8165 12.0139 15.1463 10.9803 13.833 9.66703C12.5197 8.35373 11.4861 6.68352 10.7834 5.36079L2.23425 13.9099C1.70372 14.4405 1.35958 15.1288 1.25347 15.8715L0.517889 21.0206C0.354426 22.1648 1.3352 23.1456 2.47944 22.9821L7.62851 22.2465C8.37124 22.1404 9.05953 21.7963 9.59006 21.2658L18.1392 12.7166Z" fill="#798BA5" />
                    </svg>ویرایش

                </button>
                <button className="customeGradient text-sm" onClick={onDelete}>
                    ثبت اطلاعات
                </button>
            </div>
        </div>
    );
};

export default PageHeader;
