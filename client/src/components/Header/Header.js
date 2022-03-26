import React from "react";
import {
  BsFillTelephoneFill,
  BsFillHouseDoorFill,
  BsCartFill,
} from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="bg-[#333]">
        <div className="container py-5 text-white flex justify-between items-center">
          <div className="text-[40px]">NEU Mobile Store</div>
          <div className="flex items-center">
            <div className="text-sm">
              <div className="mb-2">
                Authorizes by National Economics University
              </div>
              <div className="mb-2">
                <span className="inline-block pr-3">
                  <BsFillTelephoneFill />
                </span>
                (84)24.36.280.280
              </div>
              <div>
                <span className="inline-block pr-3">
                  <BsFillHouseDoorFill />
                </span>
                207 Giải Phóng, Đồng Tâm, Quận Hai Bà Trưng, Hà Nội, Vietnam
              </div>
            </div>

            <span className="text-[24px] px-4">
              <BsCartFill />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
