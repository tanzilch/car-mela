/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";  // Import useTranslation

const TestimonialCard = ({ data }) => {
  const { t } = useTranslation();  // Initialize the useTranslation hook

  return (
    <div className="bg-white max-w-[300px] sm:max-w-[350px] 2xl:max-w-[400px] w-full rounded-2xl p-5 gap-3 flex flex-col min-h-full justify-between shadow-md">
      <p className="text-[14px] sm:text-[16px] text-[#4F4F4F] xl:text-[18px]">
        {t(`testimonials.${data?.id}.description`, { defaultValue: data?.description })}
      </p>
      <hr className="h-[1px] border-[#F3F4F6]" />
      <div className="flex gap-2 items-center">
        <div className="rounded-full max-w-[48px] w-full">
          <img src={data?.img} alt="no-image" className="rounded-full" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[14px] sm:text-[16px] xl:text-[18px] font-medium">
            {t(`testimonials.${data?.id}.name`, { defaultValue: data?.name })}
          </h2>
          <p className="text-[10px] sm:text-[12px] xl:text-[12px] text-[#707070] font-medium">
            {t(`testimonials.${data?.id}.designation`, { defaultValue: data?.designation })}
          </p>
          <div className="max-w-[110px] w-full flex gap-1">
            <div className="max-w-max flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="min-w-[12px]">
                  <img
                    src="/assets/images/star.svg"
                    alt="no-image"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-[12px] text-[#707070] font-medium">
              ({data?.rating})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
