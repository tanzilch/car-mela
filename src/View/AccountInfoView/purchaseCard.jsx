/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const PurchaseCard = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-3 p-4 items-center flex-col md:flex-row rounded-[12px] bg-[#F3F4F6]">
      <div className="flex md:max-w-[120px] w-full rounded-[16px]">
        <img
          src={data?.img}
          alt={t("alt.noImage")}
          className="rounded-[16px] w-full object-cover h-[200px] md:h-auto"
        />
      </div>
      <div className="flex-1 flex flex-wrap w-full flex-col gap-7">
        <h2 className="text-[20px] font-semibold">
          {t(`purchaseOfferData.${data?.id}.title`, {
            defaultValue: data?.title,
          })}
        </h2>

        <div className="flex max-w-[450px] md:max-w-[500px] w-full justify-between">
          <div className="max-w-max flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">
              {t("saveList.labels.cashPrice")}
            </h3>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
              {t(`purchaseOfferData.${data?.id}.purchasePrice`, {
                defaultValue: data?.purchasePrice,
              })}
            </span>
          </div>

          <div className="max-w-max flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">
              {t("PurchaseOffer.labels.date")}
            </h3>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
              {t(`purchaseOfferData.${data?.id}.date`, {
                defaultValue: data?.date,
              })}
            </span>
          </div>

          <div className="max-w-max flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">
              {t("PurchaseOffer.labels.idNumber")}
            </h3>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
              {t(`purchaseOfferData.${data?.id}.offerId`, {
                defaultValue: data?.title,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
