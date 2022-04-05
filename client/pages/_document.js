import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Smartphones, store" />
        <meta name="author" content="Nguyen Quang Huy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
