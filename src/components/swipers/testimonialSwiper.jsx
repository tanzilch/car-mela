/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode } from "swiper/modules";
import { TestimonialCardData } from "../../Data";
import TestimonialCardSkeleton from "../skeletons/testimonialCardSkeleton";
import TestimonialCard from "../../View/HomeView/testimonialCard";
import { useTranslation } from "react-i18next";  // Import useTranslation

const TestimonialSwiper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();  // Initialize the useTranslation hook

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Swiper
      slidesPerView={1} // Default: 1 card on small screens
      spaceBetween={20} // Default gap
      freeMode={true}
      breakpoints={{
        640: {
          slidesPerView: 2, // 2 cards on medium screens
        },
        1024: {
          slidesPerView: 3, // 3 cards on large screens
        },
      }}
      modules={[FreeMode]}
      className="mySwiper max-w-max py-2"
    >
      {isLoading ? (
        [1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <TestimonialCardSkeleton />
          </SwiperSlide>
        ))
      ) : TestimonialCardData.length > 0 ? (
        TestimonialCardData.map((item, index) => (
          <SwiperSlide className="max-w-max" key={index}>
            <TestimonialCard data={item} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
          <p className="font-bold text-gray-700">{t("testimonials.noDataFound")}</p>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default TestimonialSwiper;
