import React from "react";
import Link from "next/link";
import { BsFillPhoneFill, BsFillFilterSquareFill } from "react-icons/bs";
import { MdBatchPrediction } from "react-icons/md";

import SearchBar from "../SearchBar";
import BrandSlide from "./BrandSlide";
import styles from "./style.module.scss";

const NavBar = ({ brandList }) => {
  return (
    <div className="bg-black py-5 relative">
      <div className="container flex text-white justify-between items-center">
        <div>
          <div className={styles["product-nav-section"]}>
            <span className="text-xl pr-3">
              <BsFillPhoneFill />
            </span>
            <h4>Điện thoại</h4>
          </div>

          <div className={styles["brand-slide"]}>
            <BrandSlide brandList={brandList} />
          </div>
        </div>
        <Link href="/filter">
          <a className="flex text-base items-center">
            <span className="text-xl pr-3">
              <BsFillFilterSquareFill />
            </span>
            <h4>Bộ lọc sản phẩm</h4>
          </a>
        </Link>
        <Link href="/prediction">
          <a className="flex text-base items-center">
            <span className="text-xl pr-3">
              <MdBatchPrediction />
            </span>
            <h4>Dự đoán sản phẩm</h4>
          </a>
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
