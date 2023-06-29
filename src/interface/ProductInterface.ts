import { ColorItemEnum } from "./ColorInterface";
import { SexEnum } from "./SexInterface";

export default interface ProductInterface {
  id: number;
  article: string;
  price: number;
  sex: SexEnum;
  sport: string;
  photo: string;
  colors: ColorItemEnum[];
  priceLetter: string;
  sexLetter: string;
}
