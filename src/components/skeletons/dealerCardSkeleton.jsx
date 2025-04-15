import React from "react";

const DealerCardSkeleton = () => {
  return (
    <div className="max-w-[300px] rounded-[20px] w-full flex flex-col animate-pulse">
      <div className="rounded-t-[20px] relative flex bg-gray-300 h-[200px]">
        <div className="flex flex-col gap-2 max-w-max absolute w-full bottom-2 right-1">
          <div className="rounded-[8px] bg-gray-400 text-center px-2 py-1 h-[24px] w-[70%] mx-auto"></div>
          <div className="rounded-[8px] bg-gray-400 text-center px-2 py-1 h-[24px] w-[70%] mx-auto"></div>
        </div>
      </div>
      <div className="flex flex-col px-5 py-4 rounded-b-[20px] bg-gray-200">
        <div className="bg-gray-300 h-[20px] rounded w-[80%] mb-2"></div>
        <div className="bg-gray-300 h-[16px] rounded w-[60%]"></div>
      </div>
    </div>
  );
};

export default DealerCardSkeleton;
