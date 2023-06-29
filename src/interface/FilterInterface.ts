import { ColorItemEnum } from "./ColorInterface";
import { PriceEnum } from "./PriceInterface";
import ProductInterface from "./ProductInterface";
import { SexEnum } from "./SexInterface";
import { SportEnum } from "./SportInterface";

export default interface FilterInterface {
  sexes: SexEnum[];
  prices: PriceEnum[];
  colors: ColorItemEnum[];
  products: ProductInterface[];
  dataFiltered: ProductInterface[];
  sports: SportEnum[];
}
