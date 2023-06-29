import products from "../constant/products";
import { ColorItemEnum } from "../interface/ColorInterface";
import ProductInterface from "../interface/ProductInterface";
import { SexEnum } from "../interface/SexInterface";
import { SportEnum } from "../interface/SportInterface";

const formatProducts = (): ProductInterface[] => {
  const result = [];
  for (let index = 0; index < products.length; index++) {
    const element = products[index];

    const product: ProductInterface = {
      id: index,
      article: element.article,
      price: +element.prix.replace(",", ".").replace(" €", ""),
      sex: element.sexe as SexEnum,
      sport: element.sport as SportEnum,
      photo: element.photo,
      colors: element.couleur.split(", ") as ColorItemEnum[],
      priceLetter: element.prix,
      sexLetter: element.sexe,
    };
    result.push(product);
  }
  return result;
};

export default formatProducts;
