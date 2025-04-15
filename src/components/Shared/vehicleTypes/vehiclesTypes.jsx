import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { VehiclesTypeData } from "../../../Data";
import VehiclesTypeCard from "../../UI/Card/vehiclesTypeCard";
import VehiclesTypeCardSkeleton from "../../skeletons/vehiclesTypeSkeleton";

const VehiclesTypes = () => {
  const { t } = useTranslation(); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 

  
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="bg-[#f9fafb] py-14">
      <div className="w-full flex flex-col gap-4 container">
        <h1 className="text-[26px] text-center md:text-start text-[#1F1F1F] font-bold xl:text-[32px]">
          {t("vehicletype.vehicleTypes")} 
        </h1>
        <div className="flex flex-wrap items-center gap-4 md:gap-5 lg:gap-9 justify-center  xl:justify-between 2xl:justify-start">
          {isLoading ? (
            [1, 2, 3].map((index) => (
              <div key={index}>
                <VehiclesTypeCardSkeleton />
              </div>
            ))
          ) : VehiclesTypeData.length > 0 ? (
            VehiclesTypeData.map((item, index) => (
              <div key={index}>
                <VehiclesTypeCard data={ item} key={index} /> 
              </div>
            ))
          ) : (
            <div className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
              <p className="font-bold text-gray-700">{t("vehicletype.noDataFound")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehiclesTypes;
