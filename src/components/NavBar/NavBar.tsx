import React, { FC } from "react";
import SexMenu from "./SexMenu";
import PriceMenu from "./PriceMenu";
import ColorMenu from "./ColorMenu";

const NavBar: FC = () => {
  return (
    <div className="flex-col">
      <SexMenu />
      <PriceMenu />
      <ColorMenu />
    </div>
  );
};

export default NavBar;
