import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import TestimonialSwiper from "../../components/swipers/testimonialSwiper";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 container py-10">
      <h2 className="text-[28px] sm:text-[32px] capitalize text-center md:text-start md:text-[40px] xl:text-[48px] font-bold">
        {t("aboutUs.heading")}
      </h2>
      <div className="w-full">
        <Marquee>
          <TestimonialSwiper />
        </Marquee>
      </div>
    </div>
  );
};

export default AboutUs;
