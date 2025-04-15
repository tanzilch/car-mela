const TestimonialCardSkeleton = () => {
    return (
      <div className="bg-white max-w-[350px] w-full rounded-2xl p-5 gap-3 flex flex-col min-h-full justify-between animate-pulse">
        {/* Placeholder for description */}
        <div className="h-[16px] xl:h-[18px] bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-[16px] xl:h-[18px] bg-gray-200 rounded w-[80%]"></div>
        
        <hr className="h-[1px] border-[#F3F4F6]" />
  
        <div className="flex gap-2 items-center">
          {/* Placeholder for profile image */}
          <div className="rounded-full max-w-[48px] w-full bg-gray-200 h-[48px]"></div>
  
          <div className="flex flex-col gap-1">
            {/* Placeholder for name */}
            <div className="h-[16px] xl:h-[18px] bg-gray-200 rounded w-[60%]"></div>
            {/* Placeholder for designation */}
            <div className="h-[10px] xl:h-[12px] bg-gray-200 rounded w-[50%]"></div>
            
            <div className="max-w-[110px] w-full flex gap-1 items-center">
              {/* Placeholder for stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="min-w-[12px] w-[12px] h-[12px] bg-gray-200 rounded"
                  ></div>
                ))}
              </div>
              {/* Placeholder for rating */}
              <div className="h-[12px] bg-gray-200 rounded w-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCardSkeleton;
  