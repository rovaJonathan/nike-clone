import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Body from "../components/Body";

const IndexPage: FC<PageProps> = () => {
  return (
    <main>
      <div className="container mx-auto box-border">
        <Header />
        <div className="flex-row flex">
          <NavBar />
          <Body />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Nike</title>;
