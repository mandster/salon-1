// components/Header.tsx
'use client';

import React from 'react';
import { useTheme } from '../lib/ThemeContext';


const ThemeToggle = () => {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="text-xl border-2 border-primary p-1 rounded-full transition-transform hover:scale-105"
      title="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export const Header = ({ userName, location }: { userName: string; location: string }) => (
<header className="flex justify-between items-center px-4 py-3 bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div className="flex flex-col">
      <p className="text-xl font-semibold">Hello, {userName}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
    </div>

    <div className="flex gap-3 items-center text-xl">
      <div className="border-2 border-primary p-1 rounded-full">📅</div>
      <div className="border-2 border-primary p-1 rounded-full">👤</div>
      <ThemeToggle />
    </div>
  </header>
);