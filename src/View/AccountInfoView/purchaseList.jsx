/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { PurchaseCardData } from '../../Data';
import PurchaseCard from './purchaseCard';
import PurchaseCardSkeleton from '../../components/skeletons/purchaseCardSkeleton';
import { useTranslation } from "react-i18next";  // Import useTranslation
const PurchaseList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation();  // Initialize the useTranslation hook

    useEffect(() => {
      // Simulate a delay for loading the content (e.g., 2 seconds)
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after the delay
      }, 2000); // 2 seconds delay
  
      // Clean up the timer when the component is unmounted
      return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once when the component mounts
  
    return (
      <div className="flex flex-col gap-3">
        {isLoading ? (
          [1, 2, 3, 4,5].map((index) => (
            <div key={index} className="flex-shrink-0">
              <PurchaseCardSkeleton />
            </div>
          ))
        ) : PurchaseCardData.length > 0 ? (
            PurchaseCardData.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <PurchaseCard data={item} />
            </div>
          ))
        ) : (
          <div className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
            <p className="font-bold text-gray-700">{t('purchaseOfferData.noDataFound')}</p>
          </div>
        )}
      </div>
    );
}

export default PurchaseList