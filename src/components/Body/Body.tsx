import React, { FC, useMemo } from "react";
import ItemProduct from "./ItemProduct";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getProducts, selectFilter } from "../../redux/filter/filter";
import { PriceEnum } from "../../interface/PriceInterface";
import { ColorItemEnum } from "../../interface/ColorInterface";

const Body: FC = () => {
  const { color, products, sex, price, sport } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const data = useMemo(() => {
    if (!color == null && !sex == null && !price == null && !sport == null) {
      return products;
    }
    const sexesResult = products.filter(
      (product) => sex === product.sex || sex === null
    );

    const sportsResults = sexesResult.filter(
      (product) => sport === product.sport || sport === null
    );

    const pricesResult = sportsResults.filter((product) => {
      if (price === null) {
        return true;
      }

      if (product.price < 50) {
        return price === PriceEnum["0-50"];
      }
      if (product.price < 100) {
        return price === PriceEnum["50-100"];
      }
      if (product.price < 150) {
        return price === PriceEnum["100-150"];
      }

      return price === PriceEnum["150-"];
    });

    const colorsResults = pricesResult.filter((product) => {
      if (color === null) {
        return true;
      }

      if (color === ColorItemEnum.multiple) {
        return product.colors.length > 1;
      }

      if (product.colors.includes(color)) return true;

      return false;
    });
    dispatch(getProducts(colorsResults));
    return colorsResults;
  }, [color, sex, price, sport, dispatch]);

  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 overflow-scroll max-h-full md:max-h-screen">
      {data.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Body;
