import React from "react";
import { BsCpuFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BiMemoryCard } from "react-icons/bi";
import { MdOutlineScreenshot } from "react-icons/md";

import styles from "./style.module.scss";

const ProductItem = ({ product }) => {
  const memoryRAM = product["Memory RAM"] / 1024;
  const memoryROM = product["Memory ROM"] / 1024;
  return (
    <div className={styles["product-item"]}>
      <div className="flex justify-center">
        <img
          src={`http://127.0.0.1:5000${product["url_icon"]}`}
          className="w-auto h-auto"
          alt={product["Name ID"]}
        />
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold">{product["Name ID"]}</h2>
        <div className="flex items-center mb-2">
          <span className="inline-block pr-2">
            <MdOutlineScreenshot />
          </span>
          <h4>{product["Display screen"]} inch</h4>
        </div>
        <div className="flex items-center mb-2">
          <span className="inline-block pr-2">
            <BsCpuFill />
          </span>
          <h4 className="line-clamp-1">{product["CPU name"]}</h4>
        </div>
        <div className="flex items-center mb-2">
          <span className="inline-block pr-2">
            <FaMemory />
          </span>
          <h4>{memoryRAM}GB</h4>
        </div>
        <div className="flex items-center">
          <span className="inline-block pr-2">
            <BiMemoryCard />
          </span>
          <h4>{memoryROM}GB</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
