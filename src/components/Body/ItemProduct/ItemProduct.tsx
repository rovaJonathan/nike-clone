import React, { FC } from "react";
import { useGetImageByName } from "../../../graphql/query";
import Img from "gatsby-image";
import ProductInterface from "../../../interface/ProductInterface";

const ItemProduct: FC<{ product: ProductInterface }> = ({ product }) => {
  const image = useGetImageByName(product.photo);
  const nbColor = product.colors.length;
  return (
    <div className="cursor-pointer mb-6">
      <div>
        <Img fluid={image} alt="Image" />
      </div>
      <div className="mt-2 pl-2 md:pl-0">
        <h3 className="text-sm font-semibold">{product.article}</h3>
        <p className="text-gray-500 text-sm">
          Chaussure pour {product.sexLetter}
        </p>
        <p className="text-gray-500 text-sm">
          {nbColor} Couleur{nbColor > 1 && "s"}
        </p>
        <p className="text-sm font-normal mt-2">{product.priceLetter}</p>
      </div>
    </div>
  );
};

export default ItemProduct;
