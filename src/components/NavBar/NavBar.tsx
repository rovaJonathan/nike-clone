import React, { FC } from "react";
import SexMenu from "./SexMenu";
import PriceMenu from "./PriceMenu";
import ColorMenu from "./ColorMenu";
import SportMenu from "./SportMenu";

const NavBar: FC = () => {
  return (
    <div className="flex-col w-fit  mr-4 hidden md:flex">
      <SexMenu />
      <PriceMenu />
      <ColorMenu />
      <SportMenu />
    </div>
  );
};

export default NavBar;
