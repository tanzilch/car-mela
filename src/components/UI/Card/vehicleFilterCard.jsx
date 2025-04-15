import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VehicleFilterCard = ({ data, allCards }) => {
  const {t} = useTranslation()
  return (
    <Link
      to={`/product-details/${data?.id}`}
      state={{ cardData: data, allCards }}
    >
    <div className="xl:max-w-[360px] mx-auto rounded-[20px] w-full flex flex-col">
      <div className=" rounded-t-[20px] relative flex">
        <img
          src={data.img}
          alt="no-image"
          className="rounded-t-[20px] w-full  h-full"
        />
        <div className="flex flex-col gap-2 max-w-max absolute w-full bottom-2 right-1">
          <div className="rounded-[8px] bg-black/50 max-w-max text-center backdrop-blur-sm text-white  px-2 py-1">
          {t('vehiclesCategoryPickUpData.cashPrice')}:{" "}
            <span className="text-[18px] font-extrabold">
              {t(`vehiclesCategoryPickUpData.${data?.id}.cashPrice`)}
            </span>{" "}
          </div>
          <div className="rounded-[8px] text-center bg-[#ED1C25] text-white  px-2 py-1">
          {t('vehiclesCategoryPickUpData.installmentPrice')}:{" "}
            <span className="text-[18px] font-extrabold">
              {t(`vehiclesCategoryPickUpData.${data?.id}.installmentPrice`)}
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 py-4 rounded-b-[20px] bg-[#F9FAFB]">
        <h2 className="text-[16px] xl:text-[20px] font-bold text-[#1f1f1f]">
          {t(`vehiclesCategoryPickUpData.${data?.id}.name`)}
        </h2>
        <p className="text-[16px] text-[#38465A] font-medium">
          {t(`vehiclesCategoryPickUpData.${data?.id}.model`)} {t('vehiclesCategoryPickUpData.model')}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default VehicleFilterCard;
