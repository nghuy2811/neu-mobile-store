import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from "./style.module.scss";

const BrandSlide = ({ brandList }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full text-white">
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
              <SwiperSlide key={index} className="text-base leading-[21px]">
                <span>{brand}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <button className="absolute top-[50%] left-0 translate-y-[-50%] swiper-button-prev">
        <span className="text-[20px] text-white">
          <AiOutlineLeft />
        </span>
      </button>
      <button className="absolute top-[50%] right-0 translate-y-[-50%] swiper-button-next">
        <span className="text-[20px] text-white">
          <AiOutlineRight />
        </span>
      </button>
    </div>
  );
};

export default BrandSlide;
