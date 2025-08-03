// components/ui/button.tsx
const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="mx-auto mt-6 mb-10 px-6 py-2 text-sm font-semibold bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform">
    {children}
  </button>
);

export default Button
