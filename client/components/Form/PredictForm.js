import React, { useState, useEffect, useCallback, useMemo } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import PredictStep from "./PredictStep";
import ResultStep from "./ResultStep";

const PredictForm = ({ onCloseForm }) => {
  const [response, setResponse] = useState([]);
  const [messageStudyWork, setMessageStudyWork] = useState({});
  const [messageEntertainment, setMessageEntertainment] = useState({});
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (response.length !== 0) {
      if ("study_work" in response[0]) {
        if (response[0]["study_work"] === "Suitable") {
          setMessageStudyWork({
            message: "Sản phẩm này phù hợp với nhu cầu học tập và làm việc!",
            type: true,
          });
        } else if (response[0]["study_work"] === "Not suitable") {
          setMessageStudyWork({
            message:
              "Sản phẩm này không phù hợp với nhu cầu học tập và làm việc!",
            type: false,
          });
        }
      }

      if ("entertainment" in response[1]) {
        if (response[1]["entertainment"] === "Suitable") {
          setMessageEntertainment({
            message: "Sản phẩm này phù hợp với nhu cầu giải trí!",
            type: true,
          });
        } else if (response[1]["entertainment"] === "Not suitable") {
          setMessageEntertainment({
            message: "Sản phẩm này không phù hợp với nhu cầu giải trí!",
            type: false,
          });
        }
      }
    } else {
      setMessageStudyWork({});
      setMessageStudyWork({});
    }
  }, [response]);

  const handleResponse = useCallback(
    (data) => {
      setResponse(data);
    },
    [response]
  );

  const renderStep = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <PredictStep
            onHandleResponse={handleResponse}
            nextStep={() => setStep(2)}
          />
        );
      case 2:
        return (
          <ResultStep
            studyAndWork={messageStudyWork}
            entertainment={messageEntertainment}
            prevStep={() => setStep(1)}
          />
        );
    }
  }, [step, response, messageStudyWork, messageEntertainment]);

  return (
    <div className="bg-white p-8 md:p-12 rounded-[12px] relative">
      <span
        className="cursor-pointer inline-block absolute top-4 right-4 text-2xl hover:text-[#c20000] transition-all"
        onClick={() => {
          onCloseForm();
          setStep(1);
        }}
      >
        <AiOutlineCloseCircle />
      </span>
      {renderStep}
    </div>
  );
};

export default PredictForm;
