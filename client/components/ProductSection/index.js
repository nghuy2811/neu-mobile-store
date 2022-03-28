import React from "react";

import ProductsByBrand from "./ProductsByBrand";

const ProductSection = ({ brandList, productsByBrand }) => {
  return (
    <section>
      <div className="py-14">
        <div className="container">
          {brandList.map((brand, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <ProductsByBrand products={productsByBrand[brand]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
