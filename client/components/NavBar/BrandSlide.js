import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from "./style.module.scss";

const BrandSlide = ({ brandList }) => {
  return (
    <div className="relative overflow-hidden py-10 px-5 bg-white shadow-md text-black max-w-[1200px] m-auto">
      <div className="w-full">
        <div className="mx-8">
          <Swiper
            slidesPerView={"auto"}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              disabledClass: `${styles["swiper-button-disabled"]}`,
            }}
          >
            {brandList.map((brand, index) => (
              <SwiperSlide key={index}>
                <span className="text-base leading-[21px]">{brand}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <button className="absolute top-[50%] left-[4px] translate-y-[-50%] swiper-button-prev">
        <span className="text-[20px] text-black">
          <AiOutlineLeft />
        </span>
      </button>
      <button className="absolute top-[50%] right-[4px] translate-y-[-50%] swiper-button-next">
        <span className="text-[20px] text-black">
          <AiOutlineRight />
        </span>
      </button>
    </div>
  );
};

export default BrandSlide;
