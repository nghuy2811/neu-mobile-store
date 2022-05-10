import React from "react";
import Head from "next/head";

import phoneService from "../../services/phoneService";
import ProductItem from "../../components/ProductSection/ProductItem";

const AllProductsByBrand = ({ products }) => {
  return (
    <>
      <Head>
        <title>{products[0]["maker_name"]}</title>
      </Head>
      <section className="my-5">
        <div className="container">
          <div className="bg-[#F2F2F2] px-4 py-5 mb-5 flex items-center justify-between">
            <h2 className="text-2xl leading-[28px] font-semibold">
              {products[0]["maker_name"]}
            </h2>
            <span className="text-base leading-[21px] font-semibold">
              {products.length} sản phẩm
            </span>
          </div>
          <div className="flex flex-wrap gap-y-[20px] gap-x-[10px]">
            {products.map((product, index) => (
              <div key={index} className="w-full md:w-[calc(50%-10px)]">
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const brandName = context.params.brandName;
  const req = await phoneService.getPhonesByBrand(brandName);
  const products = await req.data;

  return {
    props: {
      products,
    },
  };
}

export default AllProductsByBrand;
