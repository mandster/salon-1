// components/RecommendedScroll.tsx
import React from 'react';

 const RecommendedScroll = ({ recommendations }: {
  recommendations: { name: string; discount: string }[];
}) => (
  <div className="flex overflow-x-auto gap-4 px-4 recommended">
    {recommendations.map((item, index) => (
      <div
        key={index}
        data-discount={item.discount}
        className="relative w-[180px] h-[220px] flex items-end justify-center text-center text-lg font-semibold bg-white rounded-2xl shadow-md px-4 py-6 shrink-0 transition-transform hover:-translate-y-1 before:content-[attr(data-discount)] before:absolute before:top-0 before:left-0 before:right-0 before:bg-primary before:text-white before:text-xs before:py-1 before:rounded-t-2xl before:text-center"
      >
        {item.name}
      </div>
    ))}
  </div>
);

export default RecommendedScroll
