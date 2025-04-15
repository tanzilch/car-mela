/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { FuelTypeFilterData } from "../../Data";

const FuelTypeFilter = ({ filters, handleCheckboxChange, className }) => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`}>
      {FuelTypeFilterData.map((type) => (
        <div key={type} className="flex items-center mb-2 gap-2">
          <input
            type="checkbox"
            id={type}
            value={type}
            checked={filters.fuelType.includes(type)}
            onChange={(e) => handleCheckboxChange("fuelType", e.target.value)}
            className="appearance-none w-6 h-6 rounded-[4px] bg-white border-black border-[1px] cursor-pointer flex items-center justify-center checked:border-[#ED1C25] checked:before:content-['✓'] checked:before:text-[#ED1C25] checked:before:text-sm"
          />
          <label htmlFor={type}>{t(`fuelTypes.${type}`)}</label> {/* Dynamic translation */}
        </div>
      ))}
    </div>
  );
};

export default FuelTypeFilter;
