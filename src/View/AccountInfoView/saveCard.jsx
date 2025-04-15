/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { RiDeleteBin6Line } from "react-icons/ri";

const SaveCard = ({ data, openModal }) => {
  const { t } = useTranslation();
  return (
    <div className="gap-3 flex p-4 items-center flex-col md:flex-row rounded-[12px] bg-[#F3F4F6]">
      <div className="flex md:max-w-[120px] w-full rounded-[16px]">
        <img
          src={data?.img}
          alt="no-image"
          className="rounded-[16px] w-full h-[200px] object-cover md:h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col w-full gap-4 md:gap-7">
        <h2 className="text-[20px] font-semibold">  {t(`saveListData.${data?.id}.title`, { defaultValue: data?.title })}</h2>
        <div className="flex flex-wrap  gap-3 justify-between items-center">
          <div className="flex sm:max-w-[300px]  w-full justify-between">
            <div className="max-w-max flex flex-col gap-1">
              <h3 className="text-[14px] font-medium">{t("saveList.labels.cashPrice")}</h3>
              <span className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
              {t(`saveListData.${data?.id}.purchasePrice`, { defaultValue: data?.purchasePrice })}
              </span>
            </div>
            <div className="max-w-max flex flex-col gap-1">
              <h3 className="text-[14px] font-medium"> {t(`saveList.labels.makeOffer`)}</h3>
              <span className="text-[14px] text-[#ED1C25] md:text-[16px] xl:text-[18px] font-semibold">
              {t(`saveListData.${data?.id}.installmentPrice`, { defaultValue: data?.installmentPrice })}
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-end  w-full sm:max-w-[230px]">
            <div
              className="p-3 rounded-[8px] border-[1px] border-[#B2BDCC] cursor-pointer"
              onClick={openModal}
            >
              <RiDeleteBin6Line className="text-[20px]" />
            </div>
            <div className="sm:max-w-[170px] w-full">
              <button className="bg-[#1f1f1f] py-3 w-full rounded-[8px] text-white">
              {t(`saveList.labels.btnText`)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
