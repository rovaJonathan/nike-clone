import { ColorItemEnum } from "./ColorInterface";
import { PriceEnum } from "./PriceInterface";
import { SexEnum } from "./SexInterface";

export default interface FilterInterface {
  sexes: SexEnum[];
  prices: PriceEnum[];
  colors: ColorItemEnum[];
}
