import React from "react";

import ProductItem from "../ProductSection/ProductItem";

const ProductFilter = ({ productsList }) => {
  return (
    <div clasName="w-full px-5">
      {productsList.length === 0 ? (
        <h3 className="text-center text-3xl font-bold text-[#FF0000] mt-10">
          Bạn chưa chọn bộ tìm kiếm hoặc không có sản phẩm phù hợp với nhu cầu
        </h3>
      ) : (
        <div className="flex flex-wrap">
          {productsList.map((product, index) => (
            <div className="w-1/2">
              <ProductItem key={index} product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
