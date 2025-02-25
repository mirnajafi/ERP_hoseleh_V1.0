interface Props {
  title:string;  
  isActive: boolean;
}

export default function FiltersListItem({ title,isActive }: Props) {
  return (
    <li className={`cursor-pointer ${isActive?'text-primery-600 underline underline-offset-[8px]':''}`}>
        {title}
    </li>
  )
}
