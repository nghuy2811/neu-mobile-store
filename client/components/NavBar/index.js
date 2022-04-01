import React from "react";
import Link from "next/link";
import { BsFillPhoneFill, BsFillFilterSquareFill } from "react-icons/bs";
import { HiSupport } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { RiUDiskFill } from "react-icons/ri";

import SearchBar from "../SearchBar";
import BrandSlide from "./BrandSlide";
import styles from "./style.module.scss";

const NavBar = ({ brandList }) => {
  return (
    <div className="bg-black relative">
      <div className="container flex text-white justify-between items-center">
        <div>
          <div className={styles["product-nav-section"]}>
            <span className="text-xl pr-3">
              <BsFillPhoneFill />
            </span>
            <h4>Điện thoại</h4>
            <div className={styles["brand-slide"]}>
              <BrandSlide brandList={brandList} />
            </div>
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
        <Link href="/">
          <a className="flex text-base items-center">
            <span className="text-xl pr-3">
              <RiUDiskFill />
            </span>
            <h4>Phụ kiện</h4>
          </a>
        </Link>
        <Link href="/prediction">
          <a className="flex text-base items-center">
            <span className="text-xl pr-3">
              <HiSupport />
            </span>
            <h4>Dịch vụ</h4>
          </a>
        </Link>
        <Link href="/">
          <a className="flex text-base items-center">
            <span className="text-xl pr-3">
              <BiNews />
            </span>
            <h4>Tin công nghệ</h4>
          </a>
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
