/* eslint-disable react/prop-types */
"use client";
import { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslation } from "react-i18next"; // Import useTranslation

const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);

  return (
    <div className="py-2">
      <button
        onClick={toggleAccordion}
        className={`w-full flex flex-col justify-between rounded-[14px] border-[1px] border-[#E5E7EB] items-center px-6  py-4 focus:outline-none ${
          isOpen ? "bg-gray-200" : "bg-white"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-left text-lg font-semibold">{question}</span>
          <span className="text-xl">
            {isOpen ? (
              <IoIosArrowUp className="text-[#333333]" />
            ) : (
              <IoIosArrowDown className="text-[#333333]" />
            )}
          </span>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "bg-gray-200" : "bg-white"
          }`}
          style={{
            maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          }}
        >
          <div className="text-start w-full">{answer}</div>
        </div>
      </button>
    </div>
  );
};

const Accordion = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="mx-auto py-10">
      <div className="flex flex-col items-center gap-4 max-w-[900px] mx-auto w-full">
        <h2 className="text-[20px] font-medium text-center md:text-start tracking-widest text-[#1F1F1F]">
          {t("accordion.common_questions_title")}
        </h2>
        <div className="w-full">
          {/* Accordion container */}
          {[...Array(5)].map((_, index) => (
            <AccordionItem
              key={index}
              question={t(`accordion.question${index + 1}`)}
              answer={t(`accordion.answer${index + 1}`)}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
