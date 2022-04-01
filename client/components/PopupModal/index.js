import React from "react";

import styles from "./style.module.scss";

const PopupModal = ({ children, isShow }) => {
  return (
    <div className={isShow ? "block" : "hidden"}>
      <div className="overlay">
        <div className={`${styles["popup-main"]} ${isShow ? styles.show : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
