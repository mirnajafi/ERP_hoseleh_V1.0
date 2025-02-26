'use client'; 


interface PageHeaderProps {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between w-full border-b pb-2">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-4 w-full max-w-xs">
        <div className="flex-1 border-t border-gray-300"></div>
        <button   onClick={onEdit}>
          <Pencil className="w-4 h-4 mr-2" />
          ویرایش
        </button>
        <Button variant="destructive" size="sm" onClick={onDelete}>
          <Trash className="w-4 h-4 mr-2" />
          حذف
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
