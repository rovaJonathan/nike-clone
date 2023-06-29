import React, { FC, useMemo, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import ColorItem from "./ColorItem";
import {
  ColorItemEnum,
  ColorItemInterface,
} from "../../../interface/ColorInterface";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { selectFilter, setColor } from "../../../redux/filter/filter";

const colorsList: ColorItemInterface[] = [
  {
    color: "bg-black",
    value: ColorItemEnum.black,
    label: "Noir",
  },
  {
    color: "bg-white",
    value: ColorItemEnum.white,
    label: "Blanc",
  },
  {
    color: "bg-gray-400",
    value: ColorItemEnum.gray,
    label: "Gris",
  },
  {
    color: "bg-red-500",
    value: ColorItemEnum.red,
    label: "Rouge",
  },
  {
    color: "bg-yellow-500",
    value: ColorItemEnum.yellow,
    label: "Jaune",
  },
  {
    color: "bg-green-500",
    value: ColorItemEnum.green,
    label: "Vert",
  },
  {
    color: "bg-blue-500",
    value: ColorItemEnum.blue,
    label: "Bleu",
  },
  {
    color: "bg-orange-900",
    value: ColorItemEnum.brown,
    label: "Marron",
  },
  {
    color: "bg-purple-500",
    value: ColorItemEnum.purple,
    label: "Violet",
  },
  {
    color: "bg-orange-500",
    value: ColorItemEnum.orange,
    label: "Orange",
  },
  {
    color: "",
    value: ColorItemEnum.multiple,
    label: "Multicolore",
  },
];

const ColorMenu: FC = () => {
  const { colors } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const numberOfSelect = useMemo(() => {
    return colors.length === 0 ? "" : ` (${colors.length})`;
  }, [colors]);

  const handleCheckboxChange = (value: ColorItemEnum) => {
    dispatch(setColor(value));
  };

  return (
    <MenuDrawer
      title={`Couleur${numberOfSelect}`}
      child={
        <div className="grid grid-cols-3">
          {colorsList.map((color) => (
            <ColorItem
              key={color.value}
              color={color.color}
              value={color.value}
              label={color.label}
              onClick={handleCheckboxChange}
              isChecked={colors.includes(color.value)}
            />
          ))}
        </div>
      }
    />
  );
};

export default ColorMenu;
