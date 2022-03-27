import React from "react";
import LoadingOverlay from "react-loading-overlay";

import styles from "./style.module.scss";

const LoadingContainer = ({ display, text }) => {
  if (!display) return null;
  return (
    <div className={styles.container}>
      <LoadingOverlay active spinner text={text || ""}></LoadingOverlay>
    </div>
  );
};

export default LoadingContainer;
