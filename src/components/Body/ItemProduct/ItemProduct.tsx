import React, { FC } from "react";
import { useGetImageByName } from "../../../graphql/query";
import Img from "gatsby-image";

const ItemProduct: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const image = useGetImageByName(imageUrl);
  return (
    <div className="cursor-pointer mb-6">
      <div>
        <Img fluid={image} alt="Image" />
      </div>
      <div className="mt-2 pl-2 md:pl-0">
        <h3 className="text-sm font-semibold">Jordan</h3>
        <p className="text-gray-500 text-sm">Chaussure</p>
        <p className="text-gray-500 text-sm">1 Couleur</p>
        <p className="text-sm font-normal mt-2">Price</p>
      </div>
    </div>
  );
};

export default ItemProduct;
