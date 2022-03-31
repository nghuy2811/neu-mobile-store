import React from "react";

import phoneService from "../services/phoneService";
import NavBar from "../components/NavBar";
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
      <NavBar brandList={brandList} />
      <ProductSection brandList={brandList} productsByBrand={productsByBrand} />
    </>
  );
}

export async function getServerSideProps(context) {
  const req = await phoneService.getAllPhones();
  const res = req.data;
  const data = res || null;
  return {
    props: { data },
  };
}
