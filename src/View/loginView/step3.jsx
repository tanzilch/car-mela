/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Step3 = ({ onComplete }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    onComplete(); // Update the state in the parent component
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[500px] w-full items-center flex flex-col gap-5">
        <div className="max-w-max">
          <img
            src="/assets/images/congrats.svg"
            alt="congrats-image"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-[32px] md:text-[34px] font-semibold xl:text-[36px]">
          Congratulations!
        </h2>
        <p className="text-[14px] md:text-[16px] xl:text-[18px] text-[#38465A]">
          Your account has been successfully activated.
        </p>
        <div className="max-w-[300px] w-full">
          <button
            onClick={handleNavigation}
            className="py-4 bg-[#ED1C25] text-[14px] md:text-[16px] xl:text-[18px] font-semibold w-full rounded-[12px] mt-5 text-white"
          >
            Find your favorite car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
