import { Dispatch, SetStateAction } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface SidebarToggleProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ setIsOpen }) => {
  return (
    <IconButton onClick={() => setIsOpen((prev) => !prev)} className="text-gray-600 dark:text-white">
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};

export default SidebarToggle;
