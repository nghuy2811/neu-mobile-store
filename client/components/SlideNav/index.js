import React from "react";

import SearchBar from "../SearchBar";
import BrandSlide from "./BrandSlide";

const SlideNav = ({ data }) => {
  const productsByBrand = data.reduce((acc, product) => {
    (acc[product["Maker name"]] = acc[product["Maker name"]] || []).push(
      product
    );
    return acc;
  }, {});

  const brandList = Object.keys(productsByBrand).sort();

  return (
    <div className="bg-black py-5">
      <div className="container flex">
        <div className="w-[80%] self-center">
          <BrandSlide brandList={brandList} />
        </div>
        <div className="w-[20%]">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default SlideNav;
