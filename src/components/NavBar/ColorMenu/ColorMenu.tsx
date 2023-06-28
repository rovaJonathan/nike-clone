import React, { FC, useMemo, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import ColorItem from "./ColorItem";
import {
  ColorItemEnum,
  ColorItemInterface,
} from "../../../interface/ColorInterface";

const colors: ColorItemInterface[] = [
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
    color: "bg-black",
    value: ColorItemEnum.multiple,
    label: "Multicolore",
  },
];

const ColorMenu: FC = () => {
  const [checkboxes, setCheckboxes] = useState<ColorItemEnum[]>([]);

  const numberOfSelect = useMemo(() => {
    const nb = checkboxes.filter((e) => e).length;
    return nb === 0 ? "" : ` (${nb})`;
  }, [checkboxes]);

  const handleCheckboxChange = (value: ColorItemEnum) => {
    const updatedCheckboxes = [...checkboxes];
    const index = updatedCheckboxes.indexOf(value);
    if (index === -1) {
      updatedCheckboxes.push(value);
    } else {
      updatedCheckboxes.splice(index, 1);
    }
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <MenuDrawer
      title={`Couleur${numberOfSelect}`}
      child={
        <div className="grid grid-cols-3">
          {colors.map((color) => (
            <ColorItem
              key={color.value}
              color={color.color}
              value={color.value}
              label={color.label}
              onClick={handleCheckboxChange}
              isChecked={checkboxes.includes(color.value)}
            />
          ))}
        </div>
      }
    />
  );
};

export default ColorMenu;
