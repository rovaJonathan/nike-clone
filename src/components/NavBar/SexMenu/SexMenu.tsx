import React, { FC, useMemo, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import CheckBox from "../../CheckBox";
import { selectFilter, setSex } from "../../../redux/filter/filter";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { SexEnum } from "../../../interface/SexInterface";

const SexMenu: FC = () => {
  const { sexes } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const numberOfSelect = useMemo(() => {
    return sexes.length === 0 ? "" : ` (${sexes.length})`;
  }, [sexes]);

  const handleCheckboxChange = (value: SexEnum) => {
    dispatch(setSex(value));
  };

  return (
    <MenuDrawer
      title={`Sexe${numberOfSelect}`}
      child={
        <>
          <CheckBox
            id="check-box-1"
            label="Hommes"
            checked={sexes.includes(SexEnum.male)}
            onChange={() => handleCheckboxChange(SexEnum.male)}
          />
          <CheckBox
            id="check-box-2"
            label="Femmes"
            checked={sexes.includes(SexEnum.female)}
            onChange={() => handleCheckboxChange(SexEnum.female)}
          />
          <CheckBox
            id="check-box-3"
            label="Mixtes"
            checked={sexes.includes(SexEnum.mixte)}
            onChange={() => handleCheckboxChange(SexEnum.mixte)}
          />
        </>
      }
    />
  );
};

export default SexMenu;
