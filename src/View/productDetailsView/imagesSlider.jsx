/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const ImagesSlider = ({ ImagesData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  // Handler for clicking a thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handler for navigation arrows
  const handleArrowClick = (direction) => {
    const slider = sliderRef.current;
    const step = 120; // Adjust the scroll step

    if (direction === "left") {
      slider.scrollBy({ left: -step, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: step, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Large Image */}
      <div className="relative w-full  h-[400px]">
        <img
          src={ImagesData[currentImageIndex]?.src}
          alt={`Image ${currentImageIndex}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail Slider with Overflow Effect */}
      <div className="relative w-full flex justify-center items-center mt-4">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleArrowClick("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180 bg-black/50 bg-white rounded-full p-2"
        >
          <IoArrowForward />
        </button>

        {/* Thumbnails (overflow will happen here) */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-hidden scrollbar-hidden"
        >
          {ImagesData.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(index)}
              className={`w-[100px] h-[80px] object-cover cursor-pointer rounded-lg transition-all ${
                currentImageIndex === index
                  ? "border-2  transform scale-110"
                  : "border border-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleArrowClick("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 bg-white rounded-full p-2"
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
