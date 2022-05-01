import React, { useState, useCallback } from "react";
import { BsCpuFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BiMemoryCard } from "react-icons/bi";
import { MdOutlineScreenshot } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

import PopupModal from "../PopupModal";
import ProductDetail from "./ProductDetail";
import styles from "./style.module.scss";

export const priceFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const ProductItem = ({ product }) => {
  const [showDetail, setShowDetail] = useState(false);

  const memoryRAM = product["memory_ram"] / 1024;
  const memoryROM = product["memory_rom"] / 1024;
  const handleOpenDetail = useCallback(() => {
    setShowDetail(!showDetail);
  }, [showDetail]);

  return (
    <>
      <div className={styles["product-item"]} onClick={handleOpenDetail}>
        <div className="flex justify-center">
          <img
            src={`http://127.0.0.1:5000${product["url_icon"]}`}
            className="object-contain"
            alt={product["name_id"]}
          />
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">{product["name_ID"]}</h2>
          <div className="flex items-center mb-2">
            <span className="inline-block pr-2">
              <MdOutlineScreenshot />
            </span>
            <h4>{product["screen"]} inch</h4>
          </div>
          <div className="flex items-center mb-2">
            <span className="inline-block pr-2">
              <BsCpuFill />
            </span>
            <h4 className="line-clamp-1">{product["cpu_name"]}</h4>
          </div>
          <div className="flex items-center mb-2">
            <span className="inline-block pr-2">
              <FaMemory />
            </span>
            <h4>{memoryRAM} GB</h4>
          </div>
          <div className="flex items-center mb-2">
            <span className="inline-block pr-2">
              <BiMemoryCard />
            </span>
            <h4>{memoryROM} GB</h4>
          </div>
          <div className="flex items-center text-[#D70018]">
            <span className="inline-block pr-2">
              <GiPriceTag />
            </span>
            <h4 className="text-[18px] font-bold">
              {priceFormat.format(parseInt(product.price))}
            </h4>
          </div>
        </div>
      </div>

      {showDetail && (
        <PopupModal isShow={showDetail}>
          <ProductDetail
            product={product}
            onCloseForm={() => setShowDetail(false)}
          />
        </PopupModal>
      )}
    </>
  );
};

export default ProductItem;
