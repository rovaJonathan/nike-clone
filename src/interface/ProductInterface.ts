import { ColorItemEnum } from "./ColorInterface";
import { SexEnum } from "./SexInterface";
import { SportEnum } from "./SportInterface";

export default interface ProductInterface {
  id: number;
  article: string;
  price: number;
  sex: SexEnum;
  sport: SportEnum;
  photo: string;
  colors: ColorItemEnum[];
  priceLetter: string;
  sexLetter: string;
}
