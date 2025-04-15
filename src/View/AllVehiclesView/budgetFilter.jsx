/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const PredefinedBudget = ({
  options,
  filters,
  setFilters,
  className,
  bgClass,
}) => {
  const { t } = useTranslation();

  const handleCheckboxChange = (range, checked) => {
    setFilters((prev) => ({
      ...prev,
      predefinedBudget: checked
        ? [...prev.predefinedBudget, range]
        : prev.predefinedBudget.filter(
            (selectedRange) =>
              selectedRange[0] !== range[0] || selectedRange[1] !== range[1]
          ),
    }));
  };

  return (
    <div className={`${className}`}>
      {options.map((item, index) => (
        <div key={index} className={`flex items-center gap-2 ${bgClass}`}>
          <input
            type="checkbox"
            id={`budget-${index}`}
            checked={filters.predefinedBudget.some(
              (selectedRange) =>
                selectedRange[0] === item.range[0] &&
                selectedRange[1] === item.range[1]
            )}
            onChange={(e) => handleCheckboxChange(item.range, e.target.checked)}
            className="appearance-none w-6 h-6 rounded-[4px] bg-white border-black border-[1px] cursor-pointer flex items-center justify-center checked:border-[#ED1C25] checked:before:content-['✓'] checked:before:text-[#ED1C25] checked:before:text-sm"
          />
          <label htmlFor={`budget-${index}`} className="text-gray-700">
            {t(`budgetFilterData.budgetRanges.${item.id}`)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PredefinedBudget;
