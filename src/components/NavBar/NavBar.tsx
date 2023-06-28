import React, { FC, useState } from "react";
import MenuDrawer from "./MenuDrawer";
import SexMenu from "./SexMenu";

const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState([false, false, false]);

  const toggleMenu = (index: number) => {
    const updatedMenuOpen = [...menuOpen];
    updatedMenuOpen[index] = !updatedMenuOpen[index];
    setMenuOpen(updatedMenuOpen);
  };

  return (
    <div className="flex-col">
      <SexMenu />
    </div>
  );
};

export default NavBar;
