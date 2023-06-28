import React, { FC } from "react";

const ItemProduct: FC<{ imageUrl: string; baseUrl: string }> = ({
  imageUrl,
  baseUrl,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${baseUrl}images/multicolore.png)`,
    backgroundSize: "content",
    backgroundPosition: "center",
    with: "100%",
  };

  console.log(backgroundImageStyle);

  return (
    <div className="cursor-pointer">
      <div style={backgroundImageStyle}></div>
      <div className="">
        <h3>Name</h3>
        <p>Type</p>
        <p>Couleur</p>
        <p>Price</p>
      </div>
    </div>
  );
};

export default ItemProduct;
