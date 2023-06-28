import React, { FC } from "react";
import SexMenu from "./SexMenu";
import PriceMenu from "./PriceMenu";

const NavBar: FC = () => {
  return (
    <div className="flex-col">
      <SexMenu />
      <PriceMenu />
    </div>
  );
};

export default NavBar;
