import React, { FC } from "react";
import ItemProduct from "./ItemProduct";

const Body: FC = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3">
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
      <ItemProduct baseUrl={url} imageUrl="pg-5.jpg" />
    </div>
  );
};

export default Body;
