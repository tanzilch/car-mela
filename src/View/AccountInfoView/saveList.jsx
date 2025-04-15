/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import OfferListCardSkeleton from "../../components/skeletons/offerListCardSkeleton";
import { SaveCardData } from "../../Data";
import SaveCard from "./saveCard";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const SaveList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { t } = useTranslation();  // Initialize the useTranslation hook
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
 
    return () => clearTimeout(timer);
  }, []); 

  const openModal = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-col gap-3">
      {isLoading ? (
        [1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex-shrink-0">
            <OfferListCardSkeleton />
          </div>
        ))
      ) : SaveCardData.length > 0 ? (
        SaveCardData.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <SaveCard data={item} openModal={() => openModal(item)} />
          </div>
        ))
      ) : (
        <div className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
          <p className="font-bold text-gray-700">{t('saveListData.noDataFound')}</p>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white max-w-[330px] md:max-w-[380px] flex items-center flex-col gap-3 p-6 rounded-lg  w-full">
            <RiDeleteBin6Line className="text-[55px] text-[#38465A]" />
            <h2 className="text-[20px] text-center md:text-[24px] font-medium">
            {t("deleteConfirmation.title")}
            </h2>
            <div className="flex flex-col gap-3 w-full">
              <button
                className="px-4 py-3 text-[18px] font-semibold rounded-xl bg-red-500 text-white"
                onClick={() => {
                  console.log("Deleting:", selectedCard);
                  closeModal();
                }}
              >
                   {t("deleteConfirmation.cancel")}
              </button>
              <button
                className="px-4 py-3 w-full text-[18px] rounded-xl bg-[#F3F4F6] text-[#67788E]"
                onClick={closeModal}
              >
              {t("deleteConfirmation.confirm")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaveList;
