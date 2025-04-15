/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  BudgetFilterData,
  VehiclesCategoryFilterData,
  VehicleTypeFilterData,
} from "../../Data";
import VehicleCategoryCardSkeleton from "../../components/skeletons/vehicleCategoryCardSkeleton";
import { MdClose, MdOutlineSignalCellularNodata } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import ColorFilter from "./colorFilter";
import FuelTypeFilter from "./fuelTypeFilter";
import PredefinedBudget from "./budgetFilter";
import CustomBudget from "./customBudget";
import VehicleTypeFilter from "./vehicleTypeFilter";
import VehicleFilterCard from "../../components/UI/Card/vehicleFilterCard";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

const AllVehiclesFilter = ({ selectedTitle }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    vehicleType: [],
    predefinedBudget: [],
    fuelType: [],
    color: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(VehiclesCategoryFilterData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (selected) => {
    setCurrentPage(selected + 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  useEffect(() => {
    let data = VehiclesCategoryFilterData;

    // Filter by Vehicle Type
    if (filters.vehicleType.length > 0) {
      data = data.filter((item) =>
        filters.vehicleType.includes(item.vehicleType)
      );
    }

    // Filter by Predefined Budget Ranges
    if (filters.predefinedBudget.length > 0) {
      data = data.filter((item) =>
        filters.predefinedBudget.some(([min, max]) => {
          const price = parseInt(item.cashPrice.replace(/[,৳]/g, ""), 10);
          return (
            price >= parseInt(min, 10) &&
            (max === "or more" || price <= parseInt(max, 10))
          );
        })
      );
    }

    // Filter by Custom Budget Inputs
    if (filters.minBudget || filters.maxBudget) {
      data = data.filter((item) => {
        const price = parseInt(item.cashPrice.replace(/[,৳]/g, ""), 10);
        const minBudget = filters.minBudget || 0;
        const maxBudget = filters.maxBudget || Infinity;
        return price >= minBudget && price <= maxBudget;
      });
    }

    if (filters.fuelType.length > 0) {
      data = data.filter((item) => filters.fuelType.includes(item.fuelType));
    }

    if (filters.color.length > 0) {
      data = data.filter((item) => filters.color.includes(item.color));
    }

    setFilteredData(data);
  }, [filters]);
  const validateBudgetInput = () => {
    if (
      filters.minBudget &&
      filters.maxBudget &&
      filters.minBudget > filters.maxBudget
    ) {
      alert("Min Budget cannot be greater than Max Budget.");
      return false;
    }
    return true;
  };
  const applyCustomBudget = () => {
    if (validateBudgetInput()) {
      console.log(
        `Applying custom budget: ${filters.minBudget} to ${filters.maxBudget}`
      );
    }
  };

  return (
    <div className="flex container flex-col gap-7 mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-[22px] md:text-[26px] xl:text-[32px] font-semibold">
          {t(`filterHeading.allVehicles.${selectedTitle}`)}
        </h1>

        {/* Button to toggle the sidebar */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-transparent border-[1px] border-gray-200 text-black px-3 py-[6px] rounded-lg block lg:hidden"
        >
          <div className="flex gap-2 items-center">
            <IoFilterSharp />
            {t("vehicleFiltersSection.vehicleFiltersText.filters")}
          </div>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 bg-gray-100 w-full h-full shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">
              {t("vehicleFiltersSection.vehicleFiltersText.filters")}
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="p-4   overflow-y-auto h-[calc(100%-64px)] flex flex-col gap-4">
            {/* Vehicle Type */}
            <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
              <h4 className="font-medium">
                {t("vehicleFiltersSection.vehicleFiltersText.vehicleType")}
              </h4>
              <VehicleTypeFilter
                vehicleTypes={VehicleTypeFilterData}
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
            {/* Budget */}
            <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
              <h4 className="font-medium">
                {t("vehicleFiltersSection.vehicleFiltersText.budget")}
              </h4>
              {/* Predefined Budget Options */}
              <PredefinedBudget
                options={BudgetFilterData}
                filters={filters}
                setFilters={setFilters}
                className="!flex !flex-col !gap-5 !items-start"
                bgClass="bg-[#F9FAFB] rounded-[10px] px-4 py-2 w-full"
              />
              {/* Custom Budget Inputs */}
              <CustomBudget
                filters={filters}
                setFilters={setFilters}
                applyCustomBudget={applyCustomBudget}
              />
            </div>
            {/* Fuel Type */}
            <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
              <h4 className="font-medium">
                {t("vehicleFiltersSection.vehicleFiltersText.fuelType")}
              </h4>
              <FuelTypeFilter
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>

            {/* Color */}
            <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
              <h4 className="font-medium">
                {t("vehicleFiltersSection.vehicleFiltersText.color")}
              </h4>
              <ColorFilter
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div className="lg:max-w-[340px] hidden lg:flex bg-[#F3F4F6] w-full rounded-[14px] p-2 flex-col gap-3">
          <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
            <h4 className="font-medium">
              {t("vehicleFiltersSection.vehicleFiltersText.vehicleType")}
            </h4>
            <VehicleTypeFilter
              vehicleTypes={VehicleTypeFilterData}
              filters={filters}
              handleCheckboxChange={handleCheckboxChange}
              className="!flex !flex-col !gap-5 bg-none"
            />
          </div>

          <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
            <h4 className="font-medium">
              {t("vehicleFiltersSection.vehicleFiltersText.budget")}
            </h4>
            {/* Predefined Budget Options */}
            <PredefinedBudget
              options={BudgetFilterData}
              filters={filters}
              setFilters={setFilters}
              className="!flex !flex-col !gap-5 !items-start"
            />
            {/* Custom Budget Inputs */}
            <CustomBudget
              filters={filters}
              setFilters={setFilters}
              applyCustomBudget={applyCustomBudget}
            />
          </div>

          <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
            <h4 className="font-medium">
              {t("vehicleFiltersSection.vehicleFiltersText.fuelType")}
            </h4>
            <FuelTypeFilter
              filters={filters}
              handleCheckboxChange={handleCheckboxChange}
              className="!flex !flex-col !gap-5"
            />
          </div>

          <div className="bg-white rounded-[14px] p-5 flex flex-col gap-4">
            <h4 className="font-medium">
              {t("vehicleFiltersSection.vehicleFiltersText.color")}
            </h4>
            <ColorFilter
              filters={filters}
              handleCheckboxChange={handleCheckboxChange}
              className="!flex !flex-col !gap-5"
            />
          </div>
        </div>
        <div className="flex-1 justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4">
            {isLoading ? (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <div key={index}>
                  <VehicleCategoryCardSkeleton />
                </div>
              ))
            ) : currentItems.length > 0 ? (
              currentItems?.map((item, index) => (
                <div key={index}>
                  <VehicleFilterCard data={item} allCards={currentItems} />
                </div>
              ))
            ) : (
              <div className="flex mx-auto sm:ml-[230px] md:ml-[300px] max-w-max sm:w-full  items-center self-center xl:mt-10 gap-3 flex-col justify-center">
                <MdOutlineSignalCellularNodata className="text-[60px] text-gray-400" />
                <p className="font-bold text-[24px] md:text-[28px] text-gray-700">
                  {t("vehicleFiltersSection.vehicleFiltersText.noDataFound")}
                </p>
              </div>
            )}
          </div>
          {/* Pagination */}
          <div className="max-w-max ml-auto">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={Math.ceil(filteredData.length / itemsPerPage)}
              onPageChange={(event) => handlePageChange(event.selected)}
              containerClassName="flex justify-center items-center space-x-3 mt-8"
              previousClassName="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
              nextClassName="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
              pageClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all duration-300 transform hover:scale-105"
              activeClassName="bg-gradient-to-r from-red-500 to-red-700 text-white border-none shadow-xl scale-110"
              disabledClassName="opacity-50 cursor-not-allowed"
              breakClassName="px-4 py-2 text-red-500"
              breakLinkClassName="text-red-500"
              pageLinkClassName="focus:outline-none"
              previousLinkClassName="focus:outline-none"
              nextLinkClassName="focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVehiclesFilter;
