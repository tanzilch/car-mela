/* eslint-disable react/prop-types */
const OfferListCardSkeleton = () => {
    return (
      <div className="flex gap-2 p-3 rounded-[12px] bg-[#F3F4F6] animate-pulse">
        <div className="flex">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="h-6 w-32 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-[40px]"></div>
          </div>
          <div className="flex justify-between">
            <div className="max-w-max flex flex-col gap-2">
              <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
            </div>
            <div className="max-w-max flex flex-col gap-2">
              <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
            </div>
            <div className="max-w-max flex flex-col gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
            </div>
            <div className="max-w-max flex flex-col gap-2">
              <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OfferListCardSkeleton;
  