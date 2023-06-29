import React, { FC } from "react";
import SexMenu from "../../NavBar/SexMenu";
import PriceMenu from "../../NavBar/PriceMenu";
import ColorMenu from "../../NavBar/ColorMenu";

const ModalFilter: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 h-screen w-screen">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white  z-10 w-full h-full">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="w-[21px] h-[21px] text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
        </button>
        <div className="flex flex-col justify-between h-full">
          <div className="overflow-auto px-4">
            <SexMenu />
            <PriceMenu />
            <ColorMenu />
          </div>
          <div className="w-full border-t border-gray-200 border-solid">
            <h1 className="text-2xl font-semibold mb-4 ">Filtrer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
