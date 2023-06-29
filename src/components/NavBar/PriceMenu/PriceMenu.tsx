import React, { FC, useMemo, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import CheckBox from "../../CheckBox";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { selectFilter, setPrice } from "../../../redux/filter/filter";
import { PriceEnum } from "../../../interface/PriceInterface";

const PriceMenu: FC = () => {
  const { price } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const numberOfSelect = useMemo(() => {
    return price === null ? "" : ` (1)`;
  }, [price]);

  const handleCheckboxChange = (value: PriceEnum) => {
    dispatch(setPrice(value));
  };

  return (
    <MenuDrawer
      title={`Recherche par prix${numberOfSelect}`}
      child={
        <>
          <CheckBox
            id="check-box-price-1"
            label="Moins de €50"
            checked={price == PriceEnum["0-50"]}
            onChange={() => handleCheckboxChange(PriceEnum["0-50"])}
          />
          <CheckBox
            id="check-box-price-2"
            label="$50 - $100"
            checked={price == PriceEnum["50-100"]}
            onChange={() => handleCheckboxChange(PriceEnum["50-100"])}
          />
          <CheckBox
            id="check-box-price-3"
            label="$100 - $150"
            checked={price == PriceEnum["100-150"]}
            onChange={() => handleCheckboxChange(PriceEnum["100-150"])}
          />
          <CheckBox
            id="check-box-price-4"
            label="Plus de $150"
            checked={price == PriceEnum["150-"]}
            onChange={() => handleCheckboxChange(PriceEnum["150-"])}
          />
        </>
      }
    />
  );
};

export default PriceMenu;
