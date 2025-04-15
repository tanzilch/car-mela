/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
const OfferListCard = ({ data }) => {

  const { t } = useTranslation();
  const getStatusStyles = (status) => {
    switch (status) {
      case "Ongoing":
        return {
          bgColor: "bg-[#C3B1DD80]", 
          textColor: "text-[#194B99]", 
        };
      case "Purchase":
        return {
          bgColor: "bg-[#ADE3E380]", 
          textColor: "text-[#097C7C]", 
        };
      case "Lost":
        return {
          bgColor: "bg-[#ECDDDD80]",
          textColor: "text-[#ED1C25]", 
        };
      case "Winner":
        return {
          bgColor: "bg-[#DDE3EF]", 
          textColor: "text-[#194B99]", 
        };
      default:
        return {
          bgColor: "bg-gray-100", 
          textColor: "text-gray-700", 
        };
    }
  };

  const { bgColor, textColor } = getStatusStyles(data?.status);

  return (
    <div className="flex gap-3 p-4 items-center flex-col md:flex-row rounded-[12px] bg-[#F3F4F6]">
      <div className="flex md:max-w-[120px] w-full  rounded-[16px]">
        <img
          src={data?.img}
          alt="no-image"
          className="rounded-[16px] w-full h-[280px] object-cover md:h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col w-full gap-5">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">{t(`offerListData.${data?.id}.title`, { defaultValue: data?.title })}</h2>
          <div
            className={`rounded-[40px] px-4 py-2 text-[14px] font-medium ${bgColor} ${textColor}`}
          >
            {t(`offerListData.${data?.id}.status`, { defaultValue: data?.status })}
          </div>
        </div>
        <div className="flex flex-wrap gap-5  justify-between">
          <div className="max-w-[100px] w-full flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">{t("offerList.labels.myOffer")}</h3>
            <span className={`${data.status==='Lost'?'text-[#ED1C25]':'text-[#097C7C]'} text-[14px] md:text-[16px]  xl:text-[18px] font-semibold`}>
            {t(`offerListData.${data?.id}.myOffer`, { defaultValue: data?.myOffer })}
            </span>
          </div>
          <div className="max-w-[100px] w-full flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">{t("offerList.labels.highestOffer")}</h3>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
            {t(`offerListData.${data?.id}.highestOffer`, { defaultValue: data?.highestOffer })}
            </span>
          </div>
          <div className="max-w-[100px] w-full flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">{t("offerList.labels.date")} </h3>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
            {t(`offerListData.${data?.id}.date`, { defaultValue: data?.date })}
            </span>
          </div>
          <div className="max-w-[100px] w-full flex flex-col gap-1">
            <h3 className="text-[14px] font-medium">{t("offerList.labels.idNumber")}</h3>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
            {t(`offerListData.${data?.id}.offerId`, { defaultValue: data?.offerId })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferListCard;
