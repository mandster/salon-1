// components/SearchBar.tsx
import React from 'react';

 const SearchBar = ({ placeholder }: { placeholder: string }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-[calc(100%-2rem)] mx-auto my-4 px-5 py-3 text-base bg-white rounded-xl shadow-md block"
  />
);


export default SearchBar
