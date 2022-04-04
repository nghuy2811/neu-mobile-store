import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineErrorOutline } from "react-icons/md";

import styles from "./style.module.scss";

const ResultStep = ({ studyAndWork, entertainment, prevStep }) => {
  return (
    <div className="max-w-[400px]">
      <div className="flex justify-between">
        <div
          className={`${
            studyAndWork.type ? "text-[#42ba96]" : "text-[#df4759]"
          } text-center w-[calc(50%-8px)]`}
        >
          <span className="inline-block text-6xl pb-10">
            {studyAndWork.type ? (
              <AiOutlineCheckCircle />
            ) : (
              <MdOutlineErrorOutline />
            )}
          </span>
          <h4 className="text-base">{studyAndWork.message}</h4>
        </div>
        <div
          className={`${
            entertainment.type ? "text-[#42ba96]" : "text-[#df4759]"
          } text-center w-[calc(50%-8px)]`}
        >
          <span className="inline-block text-6xl pb-10">
            {entertainment.type ? (
              <AiOutlineCheckCircle />
            ) : (
              <MdOutlineErrorOutline />
            )}
          </span>
          <h4 className="text-base">{entertainment.message}</h4>
        </div>
      </div>
      <div className="mt-8">
        <button className={styles["submit-btn"]} onClick={prevStep}>
          Nhập lại thông số
        </button>
      </div>
    </div>
  );
};

export default ResultStep;
