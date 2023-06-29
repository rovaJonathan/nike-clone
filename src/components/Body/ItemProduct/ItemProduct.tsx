import React, { FC } from "react";
import { useGetImageByName } from "../../../graphql/query";
import Img from "gatsby-image";

const ItemProduct: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const image = useGetImageByName(imageUrl);
  return (
    <div className="cursor-pointer">
      <div>
        <Img fluid={image} alt="Image" />
      </div>
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

// import React, { FC } from "react";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";

// const ImagePage: FC<{ data: any }> = ({ data }) => {
//   const { image } = data;

//   return (
//     <div>
//       <Img fluid={image.childImageSharp.fluid} alt="Image" />
//     </div>
//   );
// };

// export const query = graphql`
//   query ($imageName: String!) {
//     image: file(relativePath: { eq: $imageName }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

// export default ImagePage;
