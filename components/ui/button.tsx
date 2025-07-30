// components/ui/button.tsx
import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className = '' }: ButtonProps) => (
  <button
    className={clsx(
      'mx-auto mt-6 mb-10 px-6 py-2 text-sm font-semibold bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform',
      className
    )}
  >
    {children}
  </button>
);
