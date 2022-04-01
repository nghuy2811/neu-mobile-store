import React from "react";
import LoadingOverlay from "react-loading-overlay";

const LoadingContainer = ({ display, text }) => {
  if (!display) return null;
  return (
    <div className="overlay">
      <LoadingOverlay active spinner text={text || ""}></LoadingOverlay>
    </div>
  );
};

export default LoadingContainer;
