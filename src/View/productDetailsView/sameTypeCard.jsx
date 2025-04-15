/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import VehicleCategoryCardSkeleton from "../../components/skeletons/vehicleCategoryCardSkeleton";
import VehicleCategoryCard from "../../components/UI/Card/vehicleCategoryCard";
import { MdOutlineSignalCellularNodata } from "react-icons/md";
import { useTranslation } from "react-i18next";

const SameTypeCard = ({ relatedCards }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[32px] md:text-[36px] xl:text-[40px] font-semibold">
        {t("sameVehicles.heading")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6">
        {isLoading ? (
          [1, 2, 3, 4, 5].map((index) => (
            <div key={index}>
              <VehicleCategoryCardSkeleton />
            </div>
          ))
        ) : relatedCards.length > 0 ? (
          relatedCards.slice(0, visibleCards).map((item, index) => (
            <div key={index}>
              <VehicleCategoryCard data={item} />
            </div>
          ))
        ) : (
          <div className="flex mx-auto sm:ml-[230px] md:ml-[300px] max-w-max sm:w-full items-center self-center xl:mt-10 gap-3 flex-col justify-center">
            <MdOutlineSignalCellularNodata className="text-[60px] text-gray-400" />
            <p className="font-bold text-[24px] md:text-[28px] text-gray-700">
              No Data Found!
            </p>
          </div>
        )}
      </div>

      {/* "More" button to load more cards */}
      {relatedCards.length > visibleCards && (
        <div className="mt-4 text-center">
          <button
            onClick={handleShowMore}
            className="px-7 py-3 bg-[#ED1C25] text-white rounded-lg"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default SameTypeCard;
