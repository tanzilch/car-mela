/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const DealerCard = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="sm:max-w-[300px] min-h-full justify-between rounded-[20px] w-full flex flex-col">
      <div className=" rounded-t-[20px] relative flex">
        <img
          src={data?.dealerimg}
          alt="no-image"
          className="rounded-t-[20px] w-full  h-full"
        />
        <div className="rounded-[8px] bg-[#194B99] max-w-max absolute w-full bottom-2 right-1 text-center  text-white  px-2 py-1">
          <span className="text-[18px] font-bold">{t(data?.dealerCompany)}</span>
        </div>
      </div>
      <div className="flex flex-col px-5 py-4 gap-4 rounded-b-[20px] bg-[#F9FAFB]">
        <h2 className="text-[16px] xl:text-[20px] font-bold text-[#1f1f1f]">
          {t(data?.dealerName)}
        </h2>
        <p className="text-[16px] text-[#38465A] font-medium">
          <div className="max-w-max flex gap-2">
            <LuPhoneCall className="text-[15px] lg:text-[20px] text-[#111827]" />
            <span>{t("dealerCard.phone")}: {t(data?.dealerPhone)}</span>
          </div>
        </p>
        <p className="text-[16px] text-[#38465A] font-medium">
          <div className="max-w-max flex gap-2">
            <SlLocationPin className="text-[15px] lg:text-[20px] text-[#111827]" />
            <span>{t("dealerCard.location")}: {t(data?.dealerAddress)}</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default DealerCard;



