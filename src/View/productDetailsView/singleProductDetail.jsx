/* eslint-disable react/prop-types */
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import ImagesSlider from "./imagesSlider";
import TimerResponsive from "./timerResponsive";
import { ImagesData } from "../../Data";
import SameTypeCard from "./sameTypeCard";
import { useTranslation } from "react-i18next";

const SingleProductDetail = ({ goToNextStep }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { t } = useTranslation();
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
  const { cardData, allCards } = location.state || {};

  if (!cardData) {
    return <div>No data available</div>;
  }
  // Filter related cards
  const relatedCards = allCards.filter(
    (card) => card.title === cardData.title && card.id !== cardData.id
  );

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? "" : option);
  };

  const ONE_DAY_MS = 864000000;

  const handleBookmarkClick = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-8 my-12 container">
      <div className="flex  flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] md:text-[32px] xl:text-[36px] font-semibold text-[#1f1f1f]">
            {t(`carNames.${cardData.name}`)}
          </h1>
          <div
            className="max-w-[120px] flex rounded-[10px] border-[#B2BDCC] border-[1px] items-center gap-2 w-full p-2 cursor-pointer"
            onClick={handleBookmarkClick}
          >
            {isBookmarked ? (
              <IoBookmark className="text-black" size={24} />
            ) : (
              <IoBookmarkOutline className="text-[#B2BDCC]" size={24} />
            )}
            <span className="text-sm font-medium">
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </span>
          </div>
        </div>
        <div className="flex items-start flex-col lg:flex-row gap-5 xl:gap-10">
          <div className="flex-1 border-[#E5E7EB] flex flex-col gap-4  w-full  ">
            {/*image section*/}
            <ImagesSlider ImagesData={ImagesData} />
            <TimerResponsive data={cardData} />
            <div className="flex flex-col gap-4 border-[1px] border-[#E5E7EB] p-6 rounded-[20px]">
              <h2 className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold text-[#111827]">
                {t("singleSpecsSection.specification")}
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {cardData.specification &&
                  cardData.specification.map((spec, index) => (
                    <React.Fragment key={index}>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img
                            src="/assets/icons/manufacture.svg"
                            alt="no-image"
                          />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.yearOfManufacture")}
                          </span>
                        </div>
                        {t(spec?.yearOfManufacture)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/model.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.model")}
                          </span>
                        </div>
                        {t(spec?.name)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img
                            src="/assets/icons/registration.svg"
                            alt="no-image"
                          />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.yearOfRegistration")}
                          </span>
                        </div>
                        {t(spec.yearOfRegistration)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img
                            src="/assets/icons/manufacture.svg"
                            alt="no-image"
                          />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.bodyType")}
                          </span>
                        </div>
                        {t(spec.bodyType)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/papers.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.registrationNumber")}
                          </span>
                        </div>
                        {spec.registrationNumber}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/papers.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.registrationPapers")}
                          </span>
                        </div>
                        {t(spec.registrationPapers)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/fuel.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.fuel")}
                          </span>
                        </div>
                        {t(spec.fuel)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/fuel.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.color")}
                          </span>
                        </div>
                        {t(spec.color)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/engine.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.engineNumber")}
                          </span>
                        </div>
                        {spec.engineNumber}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img
                            src="/assets/icons/location.svg"
                            alt="no-image"
                          />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.depotLocation")}
                          </span>
                        </div>
                        {t(spec.depotLocation)}
                      </div>
                      <div className="flex justify-between w-full rounded-[16px] px-4 py-2 bg-[#F9FAFB]">
                        <div className="flex gap-2 flex-1">
                          <img src="/assets/icons/chasis.svg" alt="no-image" />
                          <span className="text-[14px] xl:text-[16px] font-medium">
                            {t("singleSpecsSection.chasisNumber")}
                          </span>
                        </div>
                        {spec.chasisNumber}
                      </div>
                    </React.Fragment>
                  ))}
              </div>
              <span className="text-[12px] text-end md:text-[14px] xl:text-[16px]">
                {t("singleSpecsSection.listingDate")}: {cardData?.listingDate}
              </span>
            </div>

            <div className="flex flex-col gap-4 border-[1px] border-[#E5E7EB] p-6 rounded-[20px]">
              <h2 className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold">
                {t("featureSection.featuresHeading")}
              </h2>
              {cardData.features ? (
                Object.keys(cardData.features).map((featureKey) => (
                  <div
                    key={featureKey}
                    className="rounded-[16px] grid grid-cols-2 bg-[#F9FAFB] p-3"
                  >
                    <h2 className="text-[16px] font-bold capitalize">
                      {t(`featureSection.features.${featureKey}`)}
                    </h2>
                    <div className="flex flex-col gap-2">
                      <ul>
                        {cardData.features[featureKey].map((value, index) => (
                          <li key={index}>
                            {t(
                              `featureSection.features.${featureKey}List.${index}`
                            ) || value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-[14px] md:text-[16px] xl:text-[18px] text-[#2A3649]">
                  {t("featureSection.features.noFeaturesAvailable")}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 border-[1px] border-[#E5E7EB] p-6 rounded-[20px]">
              <h2 className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold">
                {" "}
                {t("singleCarDetail.carDetailHeading")}
              </h2>
              <p className="text-[12px] md:text-[14px] xl:text-[16px] font-medium text-[#2A3649]">
                {t("singleCarDetail.carDetailDescription")}
              </p>
            </div>
            <div className="flex bg-[#F9FAFB] border-[1px] border-[#E5E7EB] p-6 rounded-[20px]">
              <div className="flex justify-between items-center w-full">
                {/* Left Section */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold">
                    {t("inquirySection.questionHeading")}
                  </h2>
                  <p className="text-[14px] md:text-[16px] xl:text-[18px] text-[#2A3649]">
                    {t("headings.contactHeading")}
                  </p>
                </div>
                {/* Button Section */}
                <div className="shrink-0">
                  <button className="bg-[#1F1F1F] rounded-[36px] py-3 px-5 flex items-center gap-1 text-white">
                    <LuPhoneCall className="text-[20px] lg:text-[24px] text-white" />
                    <span className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold">
                      16758
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[430px] w-full hidden lg:flex  rounded-[20px]  flex-col gap-3 p-4 bg-[#F3F4F6]">
            <h2 className="text-[12px] md:text-[14px] xl:text-[16px] text-center font-medium">
              {t("singleTimerSection.idNumber")} {cardData?.IdNumber}
            </h2>
            <div className="flex flex-col rounded-[20px] p-4 bg-white gap-2">
              <h2>{t("singleTimerSection.timeLeft")}</h2>
              <div className="flex justify-between gap-2">
                <div className="flex flex-col items-center rounded-[20px] bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
                  <span className="text-2xl font-bold">{timeLeft.days}</span>
                  <span className="text-sm">
                    {t("singleTimerSection.days")}
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-[20px]  bg-[#ED1C251A] max-w-[175px] w-full  px-4 py-2">
                  <span className="text-2xl font-bold">{timeLeft.hours}</span>
                  <span className="text-sm">
                    {t("singleTimerSection.hours")}
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-[20px] bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
                  <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                  <span className="text-sm">
                    {t("singleTimerSection.minutes")}
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-[20px]  bg-[#ED1C251A] max-w-[175px] w-full px-4 py-2">
                  <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                  <span className="text-sm">
                    {t("singleTimerSection.seconds")}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-[20px] bg-white p-4 gap-3">
              <div className="flex flex-col">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  {t("singleTimerSection.cashPrice")}
                </h2>
                <span className="text-[24px] md:text-[28px] xl:text-[32px] text-[#1F1F1F] font-semibold">
                  {cardData?.cashPrice}
                </span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[14px] md:text-[16px] font-medium">
                  {t("singleTimerSection.installmentPrice")}
                </h2>
                <span className="text-[24px] md:text-[28px] xl:text-[32px] text-[#ED1C25] font-semibold">
                  {cardData?.installmentPrice}
                </span>
              </div>
            </div>
            <div className="flex flex-col rounded-[20px] bg-white p-4 gap-3">
              <p className="text-[20px] text-[#111827] md:text-[22px] xl:text-[24px] font-semibold">
                {t("singleTimerSection.makeOfferCall")}
              </p>
              <p className="text-[#2A3649] text-[14px] md:text-[16px] xl:text-[18px]">
                {t("singleTimerSection.contactRepresentative")}
              </p>
              <button className="bg-[#ED1C25] py-3 px-10 rounded-[14px]">
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
              <div className="flex flex-col">
                <div
                  className={`flex items-center gap-2 p-3 cursor-pointer ${
                    selectedOption === "cash"
                      ? "bg-[#F9F2F2]  rounded-[12px]"
                      : ""
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
                      selectedOption === "installments"
                        ? "text-black"
                        : "text-black"
                    }`}
                  >
                    {t("singleTimerSection.installmentsAlso")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={t(
                    "singleTimerSection.enterPhoneNumberPlaceHolder"
                  )}
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ED1C25]"
                />
                <input
                  type="text"
                  placeholder={t(
                    "singleTimerSection.enterOfferAmountPlaceHolder"
                  )}
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ED1C25]"
                />
              </div>
              <button
                onClick={goToNextStep}
                className="py-[10px] rounded-[14px] bg-[#1F1F1F]"
              >
                <span className="text-[18px] md:text-[20px] text-white xl:text-[22px] font-semibold">
                  {t("singleTimerSection.makeOffer")}
                </span>
              </button>
            </div>
            <span className="text-[12px] mx-auto md:text-[14px] xl:text-[16px] font-medium">
              {t("singleTimerSection.totalOffers")} 80
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <SameTypeCard relatedCards={relatedCards} />
      </div>
    </div>
  );
};

export default SingleProductDetail;
