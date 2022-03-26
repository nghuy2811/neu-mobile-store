import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SearchBar from "../SearchBar/SearchBar";

const SlideNav = () => {
  return (
    <div className="bg-black h-24">
      <div className="container flex">
        <div className="w-[80%]"></div>
        <div className="w-[20%]">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default SlideNav;
