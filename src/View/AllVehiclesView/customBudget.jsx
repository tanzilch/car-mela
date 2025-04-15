/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const CustomBudget = ({ filters, setFilters, applyCustomBudget }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">
        {t("vehicleFiltersSection.vehicleFiltersText.customBudget")}
      </h4>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder={t("vehicleFiltersSection.vehicleFiltersText.minPlaceHolder")}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          value={filters.minBudget || ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minBudget: e.target.value ? parseInt(e.target.value, 10) : "",
            }))
          }
        />
        <span className="text-gray-500">to</span>
        <input
          type="number"
          placeholder={t("vehicleFiltersSection.vehicleFiltersText.maxPlaceHolder")}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          value={filters.maxBudget || ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxBudget: e.target.value ? parseInt(e.target.value, 10) : "",
            }))
          }
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={applyCustomBudget}
          className="bg-[#F9F2F2] text-red-500 px-4 py-2 rounded-[12px] mt-2"
        >
         {t("vehicleFiltersSection.vehicleFiltersText.submitButtonText")}
        </button>
      </div>
    </div>
  );
};

export default CustomBudget;
