import React, { FC } from "react";
import ItemProduct from "./ItemProduct";

const Body: FC = () => {
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 overflow-scroll max-h-full md:max-h-screen">
      <ItemProduct imageUrl="pg-5.jpg" />
      <ItemProduct imageUrl="pg-5.jpg" />
      <ItemProduct imageUrl="pg-5.jpg" />
      <ItemProduct imageUrl="pg-5.jpg" />
      <ItemProduct imageUrl="pg-5.jpg" />
      <ItemProduct imageUrl="pg-5.jpg" />
      <ItemProduct imageUrl="pg-5.jpg" />
    </div>
  );
};

export default Body;
