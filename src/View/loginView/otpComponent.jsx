/* eslint-disable react/prop-types */
import { useState } from "react";
import PinInput from "react-pin-input";

const OTPComponent = ({ onVerify }) => {
  const [otp, setOtp] = useState("");
  // eslint-disable-next-line no-unused-vars
  let pinInputRef = null;

  const handleSubmit = () => {
    if (otp.length === 4) {
      console.log("Entered OTP:", otp); 
      onVerify(); 
    } else {
      alert("Please enter a valid 4-digit OTP."); 
    }
  };

  const handleOtpChange = (value) => {
    setOtp(value);
    console.log("Current OTP value:", value); 
  };

  return (
    <div className="flex flex-col h-full px-5 max-w-[500px] md:max-w-[650px] w-full items-center gap-4">
      <h3 className="text-[28px] md:text-[32px] text-center sm:text-start xl:text-[36px] font-semibold">
        Enter the 4-digit PIN code
      </h3>
      <p className="text-[#38465A] text-[14px] md:text-[16px] xl:text-[18px] text-center">
        A 4-digit PIN number has been sent to your phone via SMS. Enter the PIN
        number to activate your account.
      </p>
      <PinInput
        length={4}
        initialValue=""
        onChange={handleOtpChange} // Update OTP state and log value
        type="password"
        inputMode="numeric"
        style={{ display: "flex", gap: "8px" }}
        inputStyle={{
          borderColor: "#D9DFEA",
          borderWidth: "1px",
          borderRadius: "16px",
          width: "65px",
          height: "65px",
        }}
        inputFocusStyle={{
          borderColor: "#ED1C25",
        }}
        ref={(n) => (pinInputRef = n)}
      />
      <button
        onClick={handleSubmit} // Handle OTP submission
        className="py-3 bg-[#ED1C25] max-w-[200px] w-full rounded-[12px] mt-5 text-white"
      >
        Login
      </button>
    </div>
  );
};

export default OTPComponent;
