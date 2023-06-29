import { ColorItemEnum } from "./ColorInterface";
import { PriceEnum } from "./PriceInterface";
import ProductInterface from "./ProductInterface";
import { SexEnum } from "./SexInterface";

export default interface FilterInterface {
  sexes: SexEnum[];
  prices: PriceEnum[];
  colors: ColorItemEnum[];
  products: ProductInterface[];
}
