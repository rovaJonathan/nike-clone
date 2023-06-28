import React, { FC, useMemo, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import CheckBox from "../../CheckBox";

const PriceMenu: FC = () => {
  const [checkboxes, setCheckboxes] = useState([false, false, false, false]);

  const numberOfSelect = useMemo(
    () => checkboxes.filter((e) => e).length,
    [checkboxes]
  );

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <MenuDrawer
      title={`Recherche par prix (${numberOfSelect})`}
      child={
        <>
          <CheckBox
            id="check-box-price-1"
            label="Moins de €50"
            checked={checkboxes[0]}
            onChange={() => handleCheckboxChange(0)}
          />
          <CheckBox
            id="check-box-price-2"
            label="$50 - $100"
            checked={checkboxes[1]}
            onChange={() => handleCheckboxChange(1)}
          />
          <CheckBox
            id="check-box-price-3"
            label="$100 - $150"
            checked={checkboxes[2]}
            onChange={() => handleCheckboxChange(2)}
          />
          <CheckBox
            id="check-box-price-4"
            label="Plus de $150"
            checked={checkboxes[3]}
            onChange={() => handleCheckboxChange(3)}
          />
        </>
      }
    />
  );
};

export default PriceMenu;
