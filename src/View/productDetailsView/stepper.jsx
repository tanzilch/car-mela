/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import OfferDetail from "./singleProductDetail";
import OfferAccepted from "./offerAccepted";





const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1); 

  const goToNextStep = () => setCurrentStep(2);

  return (
    <div>
      {currentStep === 1 && <OfferDetail goToNextStep={goToNextStep} />}
      {currentStep === 2 && <OfferAccepted />}
    </div>
  );
};

export default Stepper;
