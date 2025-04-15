/* eslint-disable react/prop-types */
import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const LoginStepper = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(); // Notify that the login process is complete
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 w-full min-h-screen h-full justify-center items-center">
      {currentStep === 1 && <Step1 nextStep={nextStep} />}
      {currentStep === 2 && <Step2 nextStep={nextStep} />}
      {currentStep === 3 && <Step3 onComplete={onComplete} />}
    </div>
  );
};

export default LoginStepper;
