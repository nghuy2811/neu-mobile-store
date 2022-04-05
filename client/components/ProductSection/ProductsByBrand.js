import React from "react";
import Link from "next/link";

import ProductItem from "./ProductItem";

const ProductsByBrand = ({ products }) => {
  return (
    <div>
      <div className="">
        <h2 className="bg-[#F2F2F2] px-4 py-5 mb-5 text-2xl leading-[28px] font-semibold">
          {products[0]["maker_name"]}
        </h2>
        <div>
          <div className="flex flex-wrap gap-y-[20px] gap-x-[10px]">
            {products.map((product, index) => {
              if (index < 6) {
                return (
                  <div
                    key={index}
                    className="w-full md:w-[calc(50%-10px)] xl:w-[calc(33.3333%-10px)]"
                  >
                    <ProductItem product={product} />
                  </div>
                );
              }
            })}
          </div>

          <>
            {products.length > 6 && (
              <div className="text-center mt-5">
                <Link href={`/brand/${products[0]["maker_name"]}`}>
                  <a className="inline-block text-xl leading-[24px] transition-all hover:text-[#ff0000]">
                    Tìm kiếm thêm sản phẩm {products[0]["maker_name"]}
                  </a>
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductsByBrand;
