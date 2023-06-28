const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const imageNames = [
    "air-jordan-1-low-se.jpg",
    ,
    "mercurial-vapor-14-elite.jpg",
    ,
    "nike-zoom-mamba-3.jpg",
    ,
    "nike-downshifter-11.jpg",
    ,
    "nike-phantom-gt-elite-3d-ag-pro.jpg",
    ,
    "nike-react-metcon-turbo.jpg",
    ,
    "nike-tiempo-legend-8-club-ic.jpg",
    ,
    "pg-5.jpg",
    ,
    "nike-premier-ii-fg.jpg",
    "multicolore.png",
  ];

  imageNames.forEach((imageName) => {
    createPage({
      path: `/images/${imageName}`,
      component: path.resolve("./src/pages/ImagePage.tsx"),
      context: {
        imageName: imageName,
      },
    });
  });
};
