import React, { FC, useMemo, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import CheckBox from "../../CheckBox";

const SexMenu: FC = () => {
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

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
      title={`Sexe (${numberOfSelect})`}
      child={
        <>
          <CheckBox
            id="check-box-1"
            label="Hommes"
            checked={checkboxes[0]}
            onChange={() => handleCheckboxChange(0)}
          />
          <CheckBox
            id="check-box-2"
            label="Femmes"
            checked={checkboxes[1]}
            onChange={() => handleCheckboxChange(1)}
          />
          <CheckBox
            id="check-box-3"
            label="Mixtes"
            checked={checkboxes[2]}
            onChange={() => handleCheckboxChange(2)}
          />
        </>
      }
    />
  );
};

export default SexMenu;
