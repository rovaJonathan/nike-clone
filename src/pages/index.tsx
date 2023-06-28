import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const IndexPage: FC<PageProps> = () => {
  return (
    <main>
      <div className="container mx-auto">
        <Header />
        <div className="flex-row w-fit">
          <NavBar />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Nike</title>;
