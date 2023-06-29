import { graphql, useStaticQuery } from "gatsby";

export const useGetImageByName = (name: string): any => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n: any) => {
    return n.node.relativePath === name;
  });

  return image.node.childImageSharp.fluid;
};
