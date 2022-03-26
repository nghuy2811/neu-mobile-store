import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./style.scss";

const SearchBar = () => {
  return (
    <div className="p-1 text-base leading-[21px] relative w-full">
      <input
        placeholder="Bạn muốn mua gì?"
        className="py-2 pl-3 pr-8 w-full rounded-[12px] outline-none"
      />
      <button className="search-bar-btn bg-[#e3e3e3] px-2">
        <span className="text-[24px] h-full flex items-center">
          <AiOutlineSearch />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
