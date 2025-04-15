import { useTranslation } from "react-i18next";

/* eslint-disable react/prop-types */
const VehiclesTypeCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col max-w-[120px] sm:max-w-[190px] md:min-w-[220px]  gap-1 sm:gap-3 w-full">
      <div className="flex w-full ">
        <img src={data?.img} alt="no-image" className=" w-full h-full" />
      </div>
      <h2 className="whitespace-nowrap text-[18px] text-center xl:text-[22px] text-[#1F1F1F] font-bold">
        {t(data?.text)}
      </h2>
    </div>
  );
};

export default VehiclesTypeCard;
