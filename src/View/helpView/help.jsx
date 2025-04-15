"use client";
import { useEffect, useRef } from "react";
import Accordion from "./accordion";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Faqs = () => {
  const { t } = useTranslation(); // Initialize t() function

  // Step 1: Create a ref for the Accordion section
  const accordionRef = useRef(null);

  // Step 2: Automatically scroll to the Accordion section when the component mounts
  useEffect(() => {
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div
      ref={accordionRef}
      className="flex container flex-col items-center py-14 xl:gap-10"
    >
      <Accordion />
      <div className="flex rounded-[14px] border-[#E5E7EB] max-w-[900px] w-full">
        <div className="flex bg-[#F9FAFB] gap-10 flex-wrap border-[1px] w-full border-[#E5E7EB] p-6 rounded-[20px]">
          <div className="flex justify-between sm:max-w-[400px] flex-wrap gap-5 items-center w-full">
            {/* Left Section */}
            <div className="flex flex-col max-w-max gap-3">
              <h2 className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold">
                {t("faq.question")}
              </h2>
              <p className="text-[14px] md:text-[16px] xl:text-[18px] text-[#2A3649]">
                {t("faq.contact")}
              </p>
            </div>
            {/* Button Section */}
            <div className="shrink-0">
              <button className="bg-[#1F1F1F] rounded-[36px] py-3 px-5 flex items-center gap-1 text-white">
                <LuPhoneCall className="text-[20px] lg:text-[24px] text-white" />
                <span className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold">
                  {t("faq.call_button")}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>{t("faq.send_email")}</p>
            <span className="text-[20px] font-semibold">{t("faq.email")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
