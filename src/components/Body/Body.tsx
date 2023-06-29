import React, { FC, useMemo } from "react";
import ItemProduct from "./ItemProduct";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { selectFilter } from "../../redux/filter/filter";
import uniqBy from "lodash/uniqBy";
import { PriceEnum } from "../../interface/PriceInterface";
import { ColorItemEnum } from "../../interface/ColorInterface";

const Body: FC = () => {
  const { dataFiltered, colors, products, sexes, prices } =
    useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const data = useMemo(() => {
    if (!colors.length && !sexes.length && !prices.length) {
      return products;
    }
    const sexesResult = products.filter((product) =>
      sexes.includes(product.sex)
    );
    const pricesResult = products.filter((product) => {
      if (prices.length === 0) {
        return false;
      }

      if (product.price < 50) {
        return prices.includes(PriceEnum["0-50"]);
      }
      if (product.price < 100) {
        return prices.includes(PriceEnum["50-100"]);
      }
      if (product.price < 150) {
        return prices.includes(PriceEnum["100-150"]);
      }

      return prices.includes(PriceEnum["150-"]);
    });

    const colorsResults = products.filter((product) => {
      if (colors.length === 0) {
        return false;
      }

      if (colors.includes(ColorItemEnum.multiple)) {
        return product.colors.length > 1;
      }

      for (const pColor of product.colors) {
        if (colors.includes(pColor)) return true;
      }
      return false;
    });
    return uniqBy([...sexesResult, ...pricesResult, ...colorsResults], "id");
  }, [colors, products, sexes, dispatch]);

  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 overflow-scroll max-h-full md:max-h-screen">
      {data.map((product) => (
        <ItemProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Body;
