/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuPhoneCall } from "react-icons/lu";

const TimerResponsive = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const storedEndTime = localStorage.getItem("offerEndTime");

    let endTime;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = new Date().getTime() + ONE_DAY_MS;
      localStorage.setItem("offerEndTime", endTime.toString());
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        localStorage.removeItem("offerEndTime");
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!data) {
    return <div>No data available</div>;
  }

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? "" : option);
  };

  const ONE_DAY_MS = 86400000;

  return (
    <div className="w-full flex lg:hidden  rounded-[20px]  flex-col gap-3 p-4 bg-[#F3F4F6]">
      <h2 className="text-[28px]  font-medium">{t(`carNames.${data.name}`)}</h2>
      <h2 className="text-[16px]   font-medium">{t("singleTimerSection.idNumber")} {data?.IdNumber}</h2>
      <div className="grid  grid-cols-2 rounded-[20px] bg-white p-4 gap-3">
        <div className="flex flex-col">
          <h2 className="text-[14px] md:text-[16px] font-medium"> {t("singleTimerSection.cashPrice")}</h2>
          <span className="text-[24px] md:text-[28px] xl:text-[32px] text-[#1F1F1F] font-semibold">
            {data?.cashPrice}
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[14px] md:text-[16px] font-medium">
          {t("singleTimerSection.installmentPrice")}
          </h2>
          <span className="text-[24px] md:text-[28px] xl:text-[32px] text-[#ED1C25] font-semibold">
            {data?.installmentPrice}
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-[20px] p-4 bg-white gap-2">
        <h2>{t("singleTimerSection.timeLeft")}</h2>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col items-center rounded-[20px] bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-sm">   {t("singleTimerSection.days")}</span>
          </div>
          <div className="flex flex-col items-center rounded-[20px]  bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm"> {t("singleTimerSection.hours")}</span>
          </div>
          <div className="flex flex-col items-center rounded-[20px] bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm">  {t("singleTimerSection.minutes")}</span>
          </div>
          <div className="flex flex-col items-center rounded-[20px]  bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm">{t("singleTimerSection.seconds")}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[20px] bg-white p-4 gap-3">
        <p className="text-[20px] text-[#111827] md:text-[22px] xl:text-[24px] font-semibold">
        {t("singleTimerSection.makeOfferCall")}
        </p>
        <p className="text-[#2A3649] text-[14px] md:text-[16px] xl:text-[18px]">
        {t("singleTimerSection.contactRepresentative")}
        </p>
        <button className="bg-[#ED1C25] py-2 px-10 max-w-[180px] mx-auto w-full rounded-[14px]">
          <div className="flex gap-1 text-white justify-center items-center ">
            <LuPhoneCall className="text-[20px] lg:text-[24px] text-white" />
            <span className="text-[20px] md:text-[22px] text-white xl:text-[24px] font-semibold">
              16758
            </span>
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-3 p-4 rounded-[20px] bg-white">
        <p className="text-[20px] text-[#111827] md:text-[22px] xl:text-[24px] font-semibold">
        {t("singleTimerSection.makeOfferOnline")}
        </p>
        <p className="text-[#1F1F1F] font-medium text-[14px] md:text-[16px] xl:text-[18px]">
        {t("singleTimerSection.selectPreference")}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div
            className={`flex items-center gap-2 p-3 cursor-pointer ${
              selectedOption === "cash" ? "bg-[#F9F2F2]  rounded-[12px]" : ""
            }`}
            onClick={() => handleCheckboxChange("cash")}
          >
            <input
              type="checkbox"
              checked={selectedOption === "cash"}
              onChange={() => handleCheckboxChange("cash")}
              className="appearance-none w-5 h-5 border-2 border-[#ED1C25] rounded-sm cursor-pointer flex items-center justify-center checked:bg-transparent checked:border-[#ED1C25] checked:before:content-['✓'] checked:before:text-[#ED1C25] checked:before:text-sm checked:before:absolute"
            />
            <p
              className={`text-[12px] md:text-[14px] xl:text-[16px] font-semibold ${
                selectedOption === "cash" ? "text-black" : "text-black"
              }`}
            >
             {t("singleTimerSection.cashOption")}
            </p>
          </div>

          <div
            className={`flex items-center gap-2 p-3 cursor-pointer ${
              selectedOption === "installments"
                ? "bg-[#F9F2F2] rounded-[12px] "
                : ""
            }`}
            onClick={() => handleCheckboxChange("installments")}
          >
            <input
              type="checkbox"
              checked={selectedOption === "installments"}
              onChange={() => handleCheckboxChange("installments")}
              className="appearance-none w-5 h-5 border-2 border-[#ED1C25] rounded-sm cursor-pointer flex items-center justify-center checked:bg-transparent checked:border-[#ED1C25] checked:before:content-['✓'] checked:before:text-[#ED1C25] checked:before:text-sm checked:before:absolute"
            />
            <p
              className={`text-[12px] md:text-[14px] xl:text-[16px] font-semibold ${
                selectedOption === "installments" ? "text-black" : "text-black"
              }`}
            >
               {t("singleTimerSection.installmentsAlso")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ED1C25]"
          />
          <input
            type="text"
            placeholder="Enter your offer amount"
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ED1C25]"
          />
        </div>
        <button className="py-[10px] rounded-[14px] max-w-[180px] mx-auto w-full mt-3 bg-[#1F1F1F]">
          <span className="text-[18px] md:text-[20px] text-white xl:text-[22px] font-semibold">
          {t("singleTimerSection.makeOffer")}
          </span>
        </button>
      </div>
      <span className="text-[12px] mx-auto md:text-[14px] xl:text-[16px] font-medium">
      {t("singleTimerSection.totalOffers")}: 80
      </span>
    </div>
  );
};

export default TimerResponsive;
