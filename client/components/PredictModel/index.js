import React, { useState, useCallback } from "react";

import styles from "./style.module.scss";
import PopupModal from "../PopupModal";
import PredictForm from "../Form/PredictForm";

const PredictModel = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClickBtn = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]);

  const handleCloseForm = useCallback(() => {
    setShowForm(false);
  }, [showForm]);

  return (
    <>
      <div className={styles["predict-model-btn"]} onClick={handleClickBtn}>
        <h3 className="text-base font-bold">Dự đoán sản phẩm</h3>
      </div>
      <PopupModal isShow={showForm}>
        <PredictForm onCloseForm={handleCloseForm} />
      </PopupModal>
    </>
  );
};

export default PredictModel;
