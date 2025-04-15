/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";

const VehicleTypeFilter = ({
  vehicleTypes,
  filters,
  handleCheckboxChange,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 relative justify-between gap-3 ${className}`}
    >
      {vehicleTypes.map((type) => (
        <div key={type} className="flex items-center gap-2  mb-2">
          <input
            type="checkbox"
            id={type}
            value={type}
            checked={filters.vehicleType.includes(type)}
            onChange={(e) =>
              handleCheckboxChange("vehicleType", e.target.value)
            }
            className="appearance-none w-6 h-6 rounded-[4px] bg-white border-black border-[1px] cursor-pointer flex items-center justify-center checked:border-[#ED1C25] checked:before:content-['✓'] checked:before:text-[#ED1C25] checked:before:text-sm"
          />
          <label htmlFor={type}>{t(`vehicleTypes.${type}`)}</label>
        </div>
      ))}
    </div>
  );
};

export default VehicleTypeFilter;
