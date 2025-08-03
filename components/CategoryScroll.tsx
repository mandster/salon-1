// components/CategoryScroll.tsx
import React from 'react';

type Category = { name: string; image: string };

const CategoryScroll = ({ categories }: { categories: Category[] }) => (
  <div className="flex overflow-x-auto gap-4 px-4">
    {categories.map((cat, index) => (
      <div
        key={index}
        className="w-[180px] h-[220px] flex flex-col items-center justify-end text-center text-lg font-semibold bg-white rounded-2xl shadow-md px-4 py-6 shrink-0 transition-transform hover:-translate-y-1"
      >
        <img src={cat.image} alt={cat.name} className="w-24 h-24 object-contain mb-4" />
        {cat.name}
      </div>
    ))}
  </div>
);

export default CategoryScroll;
