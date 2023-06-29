import React, { FC, useMemo } from "react";
import MenuDrawer from "../MenuDrawer";
import CheckBox from "../../CheckBox";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { selectFilter, setSport } from "../../../redux/filter/filter";
import { SportEnum } from "../../../interface/SportInterface";

const SportMenu: FC = () => {
  const { sports } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const numberOfSelect = useMemo(() => {
    return sports.length === 0 ? "" : ` (${sports.length})`;
  }, [sports]);

  const handleCheckboxChange = (value: SportEnum) => {
    dispatch(setSport(value));
  };

  return (
    <MenuDrawer
      title={`Sports${numberOfSelect}`}
      child={
        <>
          <CheckBox
            id="check-box-sport-1"
            label="Basket"
            checked={sports.includes(SportEnum.basket)}
            onChange={() => handleCheckboxChange(SportEnum.basket)}
          />
          <CheckBox
            id="check-box-sport-2"
            label="Football"
            checked={sports.includes(SportEnum.football)}
            onChange={() => handleCheckboxChange(SportEnum.football)}
          />
          <CheckBox
            id="check-box-sport-3"
            label="Running"
            checked={sports.includes(SportEnum.running)}
            onChange={() => handleCheckboxChange(SportEnum.running)}
          />
        </>
      }
    />
  );
};

export default SportMenu;
