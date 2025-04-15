/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OfferListCard from "./offerListCard";
import { OfferListCardData } from "../../Data";
import OfferListCardSkeleton from "../../components/skeletons/offerListCardSkeleton";

const OfferList = () => {
  const { t } = useTranslation(); // Import translation function
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        [1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex-shrink-0">
            <OfferListCardSkeleton />
          </div>
        ))
      ) : OfferListCardData.length > 0 ? (
        OfferListCardData.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <OfferListCard data={{ ...item, t }} />
          </div>
        ))
      ) : (
        <div className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
          <p className="font-bold text-gray-700">{t("noDataFound")}</p>
        </div>
      )}
    </div>
  );
};

export default OfferList;
