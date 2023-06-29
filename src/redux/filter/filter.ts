import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import FilterInterface from "../../interface/FilterInterface";
import { SexEnum } from "../../interface/SexInterface";
import { PriceEnum } from "../../interface/PriceInterface";
import { ColorItemEnum } from "../../interface/ColorInterface";
import formatProducts from "../../utils/FormatProducts";

const initialState: FilterInterface = {
  sexes: [],
  prices: [],
  colors: [],
  products: formatProducts(),
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterInterface>) {
      state.colors = action.payload.colors;
      state.prices = action.payload.prices;
      state.sexes = action.payload.sexes;
    },
    setSex(state, action: PayloadAction<SexEnum>) {
      const updatedSexes = [...state.sexes];
      const index = updatedSexes.indexOf(action.payload);
      if (index === -1) {
        updatedSexes.push(action.payload);
      } else {
        updatedSexes.splice(index, 1);
      }
      state.sexes = updatedSexes;
    },
    setPrice(state, action: PayloadAction<PriceEnum>) {
      const updatedPrices = [...state.prices];
      const index = updatedPrices.indexOf(action.payload);
      if (index === -1) {
        updatedPrices.push(action.payload);
      } else {
        updatedPrices.splice(index, 1);
      }
      state.prices = updatedPrices;
    },
    setColor(state, action: PayloadAction<ColorItemEnum>) {
      const updatedColors = [...state.colors];
      const index = updatedColors.indexOf(action.payload);
      if (index === -1) {
        updatedColors.push(action.payload);
      } else {
        updatedColors.splice(index, 1);
      }
      state.colors = updatedColors;
    },
    getProducts(state, action) {},
  },
});

export const { setFilter, setSex, setColor, setPrice } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
