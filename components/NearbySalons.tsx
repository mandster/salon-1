// components/NearbySalons.tsx
import React from 'react';

export const NearbySalons = ({ salons }: {
  salons: {
    name: string;
    type: string;
    discount: string;
    rating: number;
    distance: string;
    image: string;
  }[];
}) => (
  <div className="flex flex-col gap-6 px-4 pb-32">
    {salons.map((salon, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
      >
        <img src={salon.image} alt={salon.name} className="w-full h-40 object-cover" />
        <div className="p-4 relative">
          <div className="absolute top-4 right-4 text-xl text-primary cursor-pointer">❤️</div>
          <h4 className="text-lg font-semibold mb-1">{salon.name}</h4>
          <span className="block text-sm text-gray-700 mb-1">{salon.type}</span>
          <small className="block text-xs text-gray-500">{salon.discount}</small>
          <div className="text-sm text-gray-400">⭐ {salon.rating} · {salon.distance} away</div>
        </div>
      </div>
    ))}
  </div>
);
