import React, { FC, useState } from "react";

const MenuDrawer: FC<{ child: JSX.Element; title: string }> = ({
  child,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-gray-200 border-solid border-t-1 md:mb-2 mb-6">
      <div className="flex flex-row justify-between md:pt-2 pt-6 items-center md:pb-2 pb-6">
        <span className="text-sm inline-block mr-2">{title}</span>
        <div onClick={handleOnClick} className="cursor-pointer md:block hidden">
          {isOpen ? (
            <svg
              className="w-[13px] h-[13px] text-gray-800 "
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
          ) : (
            <svg
              className="w-[13px] h-[13px] text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && child}
    </div>
  );
};

export default MenuDrawer;
