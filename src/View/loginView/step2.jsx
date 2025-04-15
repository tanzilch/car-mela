/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import OTPComponent from "./otpComponent";

const Step2 = ({ nextStep }) => {
  const handleOTPVerified = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col h-full items-center gap-4 ">
      <OTPComponent onVerify={handleOTPVerified} />
    </div>
  );
};

export default Step2;
