import React, { FC, MouseEventHandler, useMemo, useState } from "react";
import SexMenu from "../../NavBar/SexMenu";
import PriceMenu from "../../NavBar/PriceMenu";
import ColorMenu from "../../NavBar/ColorMenu";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import {
  initialStateFilter,
  selectFilter,
  setFilter,
  setSex,
} from "../../../redux/filter/filter";
import SportMenu from "../../NavBar/SportMenu";

const ModalFilter: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const { sexes, prices, colors, sports } = filter;

  const [oldFilter, setOldFilter] = useState(filter);

  const nb = useMemo(
    () => sexes.length + colors.length + prices.length + sports.length,
    [sexes, colors, prices, sports]
  );

  const handleClose = (event: any) => {
    event.preventDefault();

    dispatch(setFilter(oldFilter));
    onClose();
  };

  const handleClickApply = (event: any) => {
    event.preventDefault();
    setOldFilter(filter);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const handleClickClear = (event: any) => {
    event.preventDefault();
    dispatch(setFilter(initialStateFilter));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 h-screen w-screen">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white  z-10 w-full h-full">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
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
            <SportMenu />
          </div>
          <div className="w-full border-t border-gray-200 border-solid flex flex-row justify-around py-4">
            <button
              className="bg-white text-black py-2 px-6 rounded-3xl border border-solid border-gray-300"
              onClick={handleClickClear}
            >
              Effacer{nb > 0 && ` (${nb})`}
            </button>
            <button
              className="bg-black text-white py-2 px-6 rounded-3xl"
              onClick={handleClickApply}
            >
              Appliquer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
