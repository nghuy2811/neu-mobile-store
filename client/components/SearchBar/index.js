import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./style.module.scss";

const SearchBar = () => {
  return (
    <div className="p-1 text-base leading-[21px] relative text-black">
      <input
        placeholder="Bạn muốn mua gì?"
        className="py-2 pl-3 pr-8 w-full rounded-[12px] outline-none"
      />
      <button className={styles["search-bar-btn"]}>
        <span className="text-[24px] h-full flex items-center">
          <AiOutlineSearch />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
