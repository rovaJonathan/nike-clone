import React, { FC } from "react";
import ItemProduct from "./ItemProduct";
import { useAppSelector } from "../../redux/app/hooks";
import { selectFilter } from "../../redux/filter/filter";

const Body: FC = () => {
  const { products } = useAppSelector(selectFilter);
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 overflow-scroll max-h-full md:max-h-screen">
      {products.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Body;
