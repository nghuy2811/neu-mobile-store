import React from "react";
import { BsCpuFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BiMemoryCard } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineScreenshot } from "react-icons/md";
import { priceFormat } from "./ProductItem";

const ProductDetail = ({ onCloseForm, product }) => {
  const memoryRAM = product["memory_ram"] / 1024;
  const memoryROM = product["memory_rom"] / 1024;

  return (
    <div className="bg-white p-12 rounded-[12px] relative">
      <span
        className="cursor-pointer inline-block absolute top-4 right-4 text-2xl hover:text-[#c20000] transition-all"
        onClick={() => {
          onCloseForm();
        }}
      >
        <AiOutlineCloseCircle />
      </span>
      <div className="flex flex-col md:flex-row gap-x-[20px] gap-y-[30px]">
        <div className="flex justify-center">
          <img
            src={`http://127.0.0.1:5000${product["url_photo"]}`}
            className="w-auto h-[320px] object-contain"
            alt={product["name_id"]}
          />
        </div>
        <div className="flex flex-col justify-between gap-y-[20px] xl:gap-y-0">
          <div>
            <h2 className="mb-5 text-2xl font-bold">{product["name_ID"]}</h2>
            <div className="flex items-center mb-2 text-base">
              <h4>
                Vi xử lý: {product["cpu_name"]} - {product["cpu_cores"]} lõi -{" "}
                {product["cpu_freq"]} GHz
              </h4>
            </div>
            <div className="flex items-center mb-2 text-base">
              <h4>
                Màn hình: {product["screen"]} inch - {product["height"]} x{" "}
                {product["width"]}
              </h4>
            </div>

            <div className="flex items-center mb-2 text-base">
              <h4>RAM: {memoryRAM} GB</h4>
            </div>
            <div className="flex items-center mb-2 text-base">
              <h4>Bộ nhớ trong: {memoryROM} GB</h4>
            </div>
            <div className="flex items-center mb-2 text-base">
              <h4>
                Hệ điều hành: {product["os_type"]} - Phiên bản:{" "}
                {product["os_version"]}
              </h4>
            </div>
            <div className="flex items-center text-base text-[#D70018]">
              <h4 className="text-[18px] font-bold">
                Giá sản phẩm: {priceFormat.format(parseInt(product.price))}
              </h4>
            </div>

            {(product["study_work"] === 1 ||
              product["entertainment"] === 1) && (
              <div className="mt-2 py-4 px-2 bg-[#999] flex flex-col gap-y-[10px] rounded-[10px]">
                {product["study_work"] === 1 && (
                  <div className="text-[#fff] flex items-center text-base">
                    <h4>- Phù hợp cho học tập và làm việc</h4>
                  </div>
                )}
                {product["entertainment"] === 1 && (
                  <div className="text-[#fff] flex items-center text-base">
                    <h4>- Phù hợp cho giải trí</h4>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <button className="bg-[#e11b1e] text-xl text-white outline-none border-none py-4 px-2 rounded-[8px] w-[calc(50%-10px)]">
              Mua ngay
            </button>
            <button className="bg-[#277cea] text-xl text-white outline-none border-none py-4 px-2 rounded-[8px] w-[calc(50%-10px)]">
              Trả góp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
