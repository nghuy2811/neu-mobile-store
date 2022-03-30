import React from "react";
import axios from "axios";

import SlideNav from "../components/SlideNav";
import ProductSection from "../components/ProductSection";

export default function Home({ data }) {
  const productsByBrand = data.reduce((acc, product) => {
    (acc[product["maker_name"]] = acc[product["maker_name"]] || []).push(
      product
    );
    return acc;
  }, {});

  const brandList = Object.keys(productsByBrand).sort();

  return (
    <>
      <SlideNav brandList={brandList} />
      <ProductSection brandList={brandList} productsByBrand={productsByBrand} />
    </>
  );
}

export async function getServerSideProps(context) {
  const req = await axios.get("http://127.0.0.1:5000/database");
  const res = req.data;
  const data = res || null;
  return {
    props: { data },
  };
}
