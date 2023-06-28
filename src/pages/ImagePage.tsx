import React, { FC } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ImagePage: FC<{ data: any }> = ({ data }) => {
  const { image } = data;

  return (
    <div>
      <Img fluid={image.childImageSharp.fluid} alt="Image" />
    </div>
  );
};

export const query = graphql`
  query ($imageName: String!) {
    image: file(relativePath: { eq: $imageName }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ImagePage;
