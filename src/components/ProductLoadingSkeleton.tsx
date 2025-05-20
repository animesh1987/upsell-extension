import { FC } from 'react';

export const ProductLoadingSkeleton: FC = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center bg-white animate-pulse h-[104px]">
      <div className="ml-2 flex flex-row">
        <div className="h-[80px] w-[60px] aspect-video bg-gray-300 rounded" />
        <div className="flex-col w-[200px] pl-2">
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 mt-2 w-1/3 bg-gray-300 rounded" />
        </div>
      </div>

      <div className="h-8 w-[120px] bg-gray-300 rounded mr-2" />
    </div>
  );
};
