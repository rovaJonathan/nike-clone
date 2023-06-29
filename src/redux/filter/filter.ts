import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import FilterInterface from "../../interface/FilterInterface";
import { SexEnum } from "../../interface/SexInterface";
import { PriceEnum } from "../../interface/PriceInterface";
import { ColorItemEnum } from "../../interface/ColorInterface";
import formatProducts from "../../utils/FormatProducts";
import { SportEnum } from "../../interface/SportInterface";
import ProductInterface from "../../interface/ProductInterface";

export const initialStateFilter: FilterInterface = {
  sex: null,
  price: null,
  color: null,
  products: formatProducts(),
  dataFiltered: formatProducts(),
  sport: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialStateFilter,
  reducers: {
    setFilter(state, action: PayloadAction<FilterInterface>) {
      state.color = action.payload.color;
      state.sex = action.payload.sex;
      state.sport = action.payload.sport;
      state.price = action.payload.price;
    },
    setSex(state, action: PayloadAction<SexEnum>) {
      if (action.payload === state.sex) {
        state.sex = null;
      } else {
        state.sex = action.payload;
      }
    },
    setPrice(state, action: PayloadAction<PriceEnum>) {
      if (action.payload === state.price) {
        state.price = null;
      } else {
        state.price = action.payload;
      }
    },
    setColor(state, action: PayloadAction<ColorItemEnum>) {
      if (action.payload === state.color) {
        state.color = null;
      } else {
        state.color = action.payload;
      }
    },
    setSport(state, action: PayloadAction<SportEnum>) {
      if (action.payload === state.sport) {
        state.sport = null;
      } else {
        state.sport = action.payload;
      }
    },
    getProducts(state, action: PayloadAction<ProductInterface[]>) {
      state.dataFiltered = action.payload;
    },
  },
});

export const { setFilter, setSex, setColor, setPrice, getProducts, setSport } =
  filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
