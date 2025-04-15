const VehicleCategoryCardSkeleton = () => {
  return (
    <div className="w-[300px]  rounded-[20px]  flex flex-col animate-pulse">
      {/* Top section for the image placeholder */}
      <div className="bg-gray-300 rounded-t-[20px] relative h-[180px] w-full"></div>

      {/* Bottom section for the text placeholders */}
      <div className="flex flex-col px-5 py-4 rounded-b-[20px] bg-[#F9FAFB]">
        {/* Title Placeholder */}
        <div className="h-[20px] bg-gray-300 rounded-md w-3/4 mb-2"></div>
        {/* Subtitle Placeholder */}
        <div className="h-[18px] bg-gray-300 rounded-md w-1/2"></div>
      </div>
    </div>
  );
};

export default VehicleCategoryCardSkeleton;
