/* eslint-disable react/prop-types */

import LoginFormSection from "./loginFormSection";

const Step1 = ({ nextStep }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-screen">
      <div className="w-full flex justify-center  relative px-4 py-4 sm:py-9 2xl:px-[60px] 2xl:pb-[100px] 2xl:pt-[75px] sm:px-7   items-center">
        <LoginFormSection nextStep={nextStep} />
      </div>
      <div className=" w-full">
        <img
          src="/assets/images/loginImage.jpeg"
          alt="login-image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Step1;
