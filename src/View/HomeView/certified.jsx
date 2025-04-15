/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

const certifiedData = [
  {
    id: 1,
    icon: "/assets/icons/workshop.svg",
    number: "23",
    descriptionKey: "certified.workshop",
  },
  {
    id: 2,
    icon: "/assets/icons/duration.svg",
    number: "30",
    descriptionKey: "certified.experienceDuration",
  },
  {
    id: 3,
    icon: "/assets/icons/vehicles.svg",
    number: "600",
    descriptionKey: "certified.sellableVehicles",
  },
  {
    id: 4,
    icon: "/assets/icons/customers.svg",
    number: "23",
    descriptionKey: "certified.satisfiedCustomers",
  },
];

const Certified = () => {
  const { t } = useTranslation();

  return (
    <div className="flex bg-[#F3F4F6] py-7 md:p-12">
      <div className="container flex flex-col xl:flex-row gap-8 justify-between items-center">
        <div className="flex flex-col gap-4 2xl:gap-8 xl:max-w-[470px] 2xl:max-w-[650px]  w-full">
          <h2 className="text-[26px] md:text-[32px] text-center xl:text-start xl:text-[40px] font-bold">
            {t("certified.heading")}
          </h2>
          <p className="text-[14px] xl:text-[16px] text-center xl:text-start text-[#38465A]">
            {t("certified.description")}
          </p>
        </div>
        <div className="flex max-w-[690px] h-[500px] w-full relative rounded-[24px]">
          <img
            src="/assets/images/certified.jpeg"
            alt="no-image"
            className="w-full h-full object-cover rounded-[24px]"
          />
          <div className="absolute left-3 top-5 xl:top-5 flex max-w-[200px] md:max-w-[280px] gap-3 w-full flex-col">
            {certifiedData?.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 md:p-5 flex gap-2 rounded-[16px]"
              >
                <div className="flex gap-2 w-full">
                  <div className="flex w-full max-w-[40px]">
                    <img
                      src={item?.icon}
                      alt="no-image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[20px] xl:text-[24px] font-bold text-[#1F1F1F]">
                      {item?.number}
                    </h3>
                    <p className="text-[12px] xl:text-[14px] text-[#2A3649]">
                      {t(item?.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
