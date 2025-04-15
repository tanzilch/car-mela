import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { CarDetailCardData } from "../../Data";
import CarDetailCardSkeleton from "../skeletons/carDetailCardSkeleton";
import CarDetailCard from "../../View/HomeView/carDetailCard";
import { useTranslation } from "react-i18next";

const CarDetailSwiper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation(); // Initialize the useTranslation hook

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      freeMode={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper max-w-full min-h-full"
    >
      {isLoading ? (
        [1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <CarDetailCardSkeleton />
          </SwiperSlide>
        ))
      ) : CarDetailCardData.length > 0 ? (
        CarDetailCardData.map((item, index) => (
          <SwiperSlide key={index}>
            <CarDetailCard data={item} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="flex w-full items-center my-10 gap-3 flex-col col-span-full">
          <p className="font-bold text-gray-700">
            {t("carDetailCardData.noDataFound")}
          </p>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default CarDetailSwiper;
