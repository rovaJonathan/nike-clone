import { ColorItemEnum } from "./ColorInterface";
import { PriceEnum } from "./PriceInterface";
import ProductInterface from "./ProductInterface";
import { SexEnum } from "./SexInterface";
import { SportEnum } from "./SportInterface";

export default interface FilterInterface {
  sex: SexEnum | null;
  price: PriceEnum | null;
  color: ColorItemEnum | null;
  sport: SportEnum | null;
  products: ProductInterface[];
  dataFiltered: ProductInterface[];
}
