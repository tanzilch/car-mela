import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import DealerCardSkeleton from "../../components/skeletons/dealerCardSkeleton";
import { DealerData } from "../../Data";
import DealerCard from "./dealerCard";

const BestDealer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation(); // Access translation function

  useEffect(() => {
    // Simulate a delay for loading the content (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after the delay
    }, 2000); // 2 seconds delay

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="flex flex-col gap-5 py-10 container">
      <h1 className="text-[36px] md:text-[42px] capitalize 2xl:text-[48px] font-bold text-center md:text-start">
        {t("bestDealer.title")} {/* Use t() to access the translated title */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {isLoading ? (
          [1, 2, 3].map((index) => (
            <div key={index}>
              <DealerCardSkeleton />
            </div>
          ))
        ) : DealerData.length > 0 ? (
          DealerData.map((item, index) => (
            <div key={index}>
              <DealerCard data={item} />
            </div>
          ))
        ) : (
          <div className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
            <p className="font-bold text-gray-700">{t("bestDealer.noData")}</p> {/* Use t() to access translated "No Data" message */}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestDealer;
