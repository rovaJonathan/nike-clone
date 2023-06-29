import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import FilterInterface from "../../interface/FilterInterface";
import { SexEnum } from "../../interface/SexInterface";
import { PriceEnum } from "../../interface/PriceInterface";
import { ColorItemEnum } from "../../interface/ColorInterface";
import formatProducts from "../../utils/FormatProducts";
import uniqBy from "lodash/uniqBy";

export const initialStateFilter: FilterInterface = {
  sexes: [],
  prices: [],
  colors: [],
  products: formatProducts(),
  dataFiltered: formatProducts(),
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialStateFilter,
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
    getProducts(state, action) {
      console.log("getProducts");

      if (!state.colors.length && !state.sexes.length && !state.prices.length) {
        state.dataFiltered = state.products;
        return;
      }
      const sexesResult = state.products.filter((product) =>
        state.sexes.includes(product.sex)
      );
      const pricesResult = state.products.filter((product) => {
        if (state.prices.length === 0) {
          return false;
        }

        if (product.price < 50) {
          return state.prices.includes(PriceEnum["0-50"]);
        }
        if (product.price < 100) {
          return state.prices.includes(PriceEnum["50-100"]);
        }
        if (product.price < 150) {
          return state.prices.includes(PriceEnum["100-150"]);
        }

        return state.prices.includes(PriceEnum["150-"]);
      });

      const colorsResults = state.products.filter((product) => {
        if (state.colors.length === 0) {
          return false;
        }

        if (state.colors.includes(ColorItemEnum.multiple)) {
          return product.colors.length > 1;
        }

        for (const pColor of product.colors) {
          if (state.colors.includes(pColor)) return true;
        }
        return false;
      });

      state.dataFiltered = uniqBy(
        [...sexesResult, ...pricesResult, ...colorsResults],
        "id"
      );
    },
  },
});

export const { setFilter, setSex, setColor, setPrice, getProducts } =
  filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
