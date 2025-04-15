/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { RiArrowRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const CarDetailCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-[#F3F4F6] h-[370px] xl:min-h-max lg:max-w-[430px] 2xl:max-w-[470px] w-full justify-between p-4 rounded-[20px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] sm:text-[32px] xl:text-[40px] font-bold text-[#1F1F1F]">
          {t(`carDetailCardData.${data?.id}.heading`)}
        </h1>
        <div className="flex flex-wrap gap-2">
          {data?.categories?.map((ls, id) => (
            <div
              key={id}
              className="bg-[#E5E7EB] text-[12px] font-medium text-[#38465A] gap-2 rounded-[8px] py-[6px] px-2"
            >
              {t(ls.category)}
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-[282px] w-full mx-auto">
        <img src={data?.img} alt="vehicle-image" />
      </div>
      <div className="flex justify-between">
        <div className="text-[16px] xl:text-[18px] text-[#38465A] font-medium">
          {data?.quantity} {t(`carDetailCardData.${data?.id}.vehiclesText`)}
        </div>
        <Link to={data?.route}>
          <div className="max-w-max flex gap-2 items-center">
            <p>{t('viewAll')}</p>
            <RiArrowRightFill className="text-[20px] xl:text-[24px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarDetailCard;
