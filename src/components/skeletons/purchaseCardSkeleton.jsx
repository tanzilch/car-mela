const PurchaseCardSkeleton = () => {
    return (
      <div className="flex gap-3 p-4 items-center rounded-[12px] bg-[#F3F4F6] animate-pulse">
        {/* Image Placeholder */}
        <div className="flex max-w-[120px] rounded-[16px] bg-gray-300 h-[80px] w-[120px]"></div>
        
        <div className="flex-1 flex flex-col gap-7">
          {/* Title Placeholder */}
          <div className="h-[20px] bg-gray-300 rounded w-[60%]"></div>
          
          {/* Details Placeholder */}
          <div className="flex justify-between">
            <div className="max-w-max flex flex-col gap-1">
              <div className="h-[14px] bg-gray-300 rounded w-[80px]"></div>
              <div className="h-[18px] bg-gray-300 rounded w-[100px]"></div>
            </div>
  
            <div className="max-w-max flex flex-col gap-1">
              <div className="h-[14px] bg-gray-300 rounded w-[60px]"></div>
              <div className="h-[18px] bg-gray-300 rounded w-[80px]"></div>
            </div>
  
            <div className="max-w-max flex flex-col gap-1">
              <div className="h-[14px] bg-gray-300 rounded w-[70px]"></div>
              <div className="h-[18px] bg-gray-300 rounded w-[90px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PurchaseCardSkeleton;
  