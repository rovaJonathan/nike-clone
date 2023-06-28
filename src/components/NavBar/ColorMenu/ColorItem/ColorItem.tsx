import React, { FC } from "react";
import { ColorItemEnum } from "../../../../interface/ColorInterface";

const ColorItem: FC<{
  color: string;
  value: ColorItemEnum;
  onClick: (value: ColorItemEnum) => void;
  label: string;
  isChecked: boolean;
}> = ({ color, onClick, label, value, isChecked }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer mb-1"
      onClick={() => onClick(value)}
    >
      <div
        className={`w-5 h-5 rounded-2xl ${color} border border-gray-300 hover:border-gray-400 flex flex-row justify-center items-center`}
      >
        {isChecked && (
          <svg
            className={`w-3 h-3 ${
              value === ColorItemEnum.white ? "text-black" : "text-white"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M1 4.304L5.304 9 13 1"
            />
          </svg>
        )}
      </div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default ColorItem;
