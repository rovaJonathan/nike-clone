import { graphql, useStaticQuery } from "gatsby";

const useGetImageByName = (name: string) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
};
