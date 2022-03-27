import React from "react";
import axios from "axios";

import Header from "../components/Header";
import SlideNav from "../components/SlideNav";
import ProductSection from "../components/ProductSection";

export default function Home({ data }) {
  return (
    <>
      <Header />
      <SlideNav data={data} />
      <ProductSection />
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
