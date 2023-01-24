import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Mwffq portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Muwaffaq - Portfolio for muwaffaq aliyu's career as a frontend developer"
        />
        <meta
          name="keywords"
          content="Muwaffaq Aliyu, portfolio, Software Engineer, Frontend, React, web development"
        />
        <meta name="author" content="mwffq" />
        <link rel="icon" type="image/png" href="/icons/favicon.png"></link>
      </Head>
      <div className="bg-peacock">
        <Header />
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Layout;
