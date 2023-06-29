import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-5 md:px-0">
      <h1 className="text-2xl md:text-1xl font-semibold ">
        Nouveautés Hommes €100 - €150 (23)
      </h1>
      <div className="ml-10 md:hidden block cursor-pointer">
        <svg
          className="w-[21px] h-[21px] text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
