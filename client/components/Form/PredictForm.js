import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";

import InputText from "./InputText";
import styles from "./style.module.scss";

const PredictForm = ({ onCloseForm }) => {
  const initialValues = {
    cpuCores: "",
    cpuFreq: "",
    height: "",
    screen: "",
    width: "",
    ram: "",
    rom: "",
  };
  return (
    <div className="bg-white p-12 rounded-[12px] relative">
      <span
        className="cursor-pointer inline-block absolute top-4 right-4 text-2xl hover:text-[#c20000] transition-all"
        onClick={onCloseForm}
      >
        <AiOutlineCloseCircle />
      </span>
      <h3 className="text-base font-bold mb-8">
        Vui lòng điền thông số cần thiết để dự đoán
      </h3>
      <div className="h-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            cpuCores: Yup.string().required("Vui lòng không bỏ trống"),
            cpuFreq: Yup.string().required("Vui lòng không bỏ trống"),
            height: Yup.string().required("Vui lòng không bỏ trống"),
            screen: Yup.string().required("Vui lòng không bỏ trống"),
            width: Yup.string().required("Vui lòng không bỏ trống"),
            ram: Yup.string().required("Vui lòng không bỏ trống"),
            rom: Yup.string().required("Vui lòng không bỏ trống"),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <InputText name="cpuCores" type="text" label="Số lõi CPU" />
              <InputText name="cpuFreq" type="text" label="Xung nhịp CPU" />
              <InputText name="height" type="text" label="Chiều dài" />
              <InputText name="screen" type="text" label="Màn hình" />
              <InputText name="width" type="text" label="Chiều rộng" />
              <InputText name="ram" type="text" label="Bộ nhớ RAM" />
              <InputText name="rom" type="text" label="Bộ nhớ ROM" />
              <button type="submit" className={styles["submit-btn"]}>
                Dự đoán
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PredictForm;
