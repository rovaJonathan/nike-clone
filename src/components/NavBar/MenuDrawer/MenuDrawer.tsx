import React, { FC } from "react";

const MenuDrawer: FC<{ child: JSX.Element; title: string }> = ({
  child,
  title,
}) => {
  return (
    <div className="border-t border-gray-200 border-solid border-t-1">
      <div className="flex flex-row justify-between pt-2 items-center">
        <span className="text-sm">{title}</span>
        <svg
          className="w-[13px] h-[13px] text-gray-800 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
          />
        </svg>
      </div>
      {child}
    </div>
  );
};

export default MenuDrawer;
