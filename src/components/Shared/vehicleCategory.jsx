/* eslint-disable react/prop-types */
import { RiArrowRightFill } from "react-icons/ri";
import VehicleCategoryCard from "../UI/Card/vehicleCategoryCard";
import { useEffect, useState } from "react";
import { VehiclesCategoryPickUpData } from "../../Data";
import VehicleCategoryCardSkeleton from "../skeletons/vehicleCategoryCardSkeleton";
import { useTranslation } from "react-i18next";

const VehicleCategory = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation(); // Initialize the useTranslation hook

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 container py-5 xl:py-7">
    
      <div className="flex justify-between">
        <h2 className="text-[#111827] font-bold text-[26px] 2xl:text-[32px]">
          {t(`vehicleCategory.${title}`)} 
        </h2>
        <div className="flex max-w-max gap-2 hover:cursor-pointer items-center text-[14px] xl:text-[16px] font-bold">
          {t("viewAll")} 
          <RiArrowRightFill className="text-[20px] xl:text-[24px]" />
        </div>
      </div>

    
      <div
        className="flex gap-3 overflow-x-auto  justify-between"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {isLoading ? (
          [1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex-shrink-0 ">
              <VehicleCategoryCardSkeleton />
            </div>
          ))
        ) : VehiclesCategoryPickUpData.length > 0 ? (
          VehiclesCategoryPickUpData.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <VehicleCategoryCard data={item} />
            </div>
          ))
        ) : (
          <div className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
            <p className="font-bold text-gray-700">
              {t("vehiclesCategoryPickUpData.noDataFound")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleCategory;
