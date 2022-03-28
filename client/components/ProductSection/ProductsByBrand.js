import React from "react";

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
                return <ProductItem product={product} />;
              }
            })}
          </div>

          <>
            {products.length > 6 && (
              <div className="text-center mt-5">
                <h2 className="inline-block text-xl leading-[24px] transition-all hover:text-[#ff0000]">
                  Tìm kiếm thêm sản phẩm {products[0]["maker_name"]}
                </h2>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductsByBrand;