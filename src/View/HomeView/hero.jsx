import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url('/assets/images/herobg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#b9010a] to-[#b9010a]/80 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-6 xl:pt-10 pb-8 xl:pb-14">
        <h1 className="text-[16px] xl:text-[18px] font-medium text-[#FFD968]">
          {t("hero.cashOrInstallments")}
        </h1>
        <p className="capitalize text-[28px] sm:text-[34px] text-white max-w-[300px] sm:max-w-[400px] text-center font-bold xl:text-[40px]">
          {t("hero.buyYourDreamCar")}
        </p>
        <img src="/assets/images/headerImage.svg" alt="cars-image" />
      </div>
      <div className="absolute -bottom-[18px] xl:-bottom-6 left-0 right-0 mx-auto flex items-center justify-center max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[686px] w-full rounded-[48px]">
        <div className="relative w-full">
          <input
            type="text"
            className="px-3 py-2 xl:p-4 border w-full shadow-lg rounded-[48px] placeholder:text-[#626262] placeholder:text-[14px] border-gray-300"
            placeholder={t("hero.searchPlaceholder")}
          />
          <FiSearch className="text-[22px] xl:text-[28px] absolute right-3 top-1/2 transform -translate-y-1/2 text-[#111827]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
