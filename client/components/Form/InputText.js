import React from "react";
import { useField } from "formik";

import styles from "./style.module.scss";

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className={`${styles["input-field"]} ${
          meta.touched && meta.error ? styles["input-error"] : ""
        }`}
      >
        <h3>{label}</h3>
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
export default InputText;
