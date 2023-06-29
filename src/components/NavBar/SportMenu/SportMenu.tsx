import React, { FC, useMemo } from "react";
import MenuDrawer from "../MenuDrawer";
import CheckBox from "../../CheckBox";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { selectFilter, setSport } from "../../../redux/filter/filter";
import { SportEnum } from "../../../interface/SportInterface";

const SportMenu: FC = () => {
  const { sport } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const numberOfSelect = useMemo(() => {
    return sport === null ? "" : ` (1)`;
  }, [sport]);

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
            checked={sport === SportEnum.basket}
            onChange={() => handleCheckboxChange(SportEnum.basket)}
          />
          <CheckBox
            id="check-box-sport-2"
            label="Football"
            checked={sport === SportEnum.football}
            onChange={() => handleCheckboxChange(SportEnum.football)}
          />
          <CheckBox
            id="check-box-sport-3"
            label="Running"
            checked={sport === SportEnum.running}
            onChange={() => handleCheckboxChange(SportEnum.running)}
          />
        </>
      }
    />
  );
};

export default SportMenu;
