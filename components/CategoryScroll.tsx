// components/CategoryScroll.tsx
import React from 'react';

export const CategoryScroll = ({ categories }: { categories: string[] }) => (
  <div className="flex overflow-x-auto gap-4 px-4">
    {categories.map((cat, index) => (
      <div
        key={index}
        className="w-[180px] h-[220px] flex items-end justify-center text-center text-lg font-semibold bg-white rounded-2xl shadow-md px-4 py-6 shrink-0 transition-transform hover:-translate-y-1"
      >
        {cat}
      </div>
    ))}
  </div>
);
