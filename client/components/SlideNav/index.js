import React from "react";

import SearchBar from "../SearchBar";
import BrandSlide from "./BrandSlide";

const SlideNav = ({ brandList }) => {
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
