

const CarDetailCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-[14px] bg-[#F3F4F6] p-6 rounded-[20px] animate-pulse">
      <div className="flex flex-col gap-2">
        {/* Skeleton for Heading */}
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>

        {/* Skeleton for Categories */}
        <div className="flex flex-wrap gap-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>

      {/* Skeleton for Image */}
      <div className="flex max-w-[282px] w-full mx-auto">
        <div className="h-[150px] w-[150px] bg-gray-300 rounded-lg"></div>
      </div>

      {/* Skeleton for Quantity and Action */}
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="max-w-max flex gap-2">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCardSkeleton;
