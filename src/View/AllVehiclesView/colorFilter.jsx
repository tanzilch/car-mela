/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";
import { ColorFilterData } from "../../Data";

const ColorFilter = ({ filters, handleCheckboxChange, className }) => {
  const {t} = useTranslation()
  return (
    <div className={`grid grid-cols-3  gap-2 ${className}`}>
      {ColorFilterData?.map((color) => (
        <div key={color} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={color}
            value={color}
            checked={filters.color.includes(color)}
            onChange={(e) => handleCheckboxChange("color", e.target.value)}
            className="appearance-none w-6 h-6 mr-2 rounded-[4px] bg-white border-black border-[1px] cursor-pointer flex items-center justify-center checked:border-[#ED1C25] checked:before:content-['✓'] checked:before:text-[#ED1C25] checked:before:text-sm"
          />
          <label htmlFor={color}>{t(`colors.${color}`)}</label>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
