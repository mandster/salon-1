// File: components/HomePage.tsx
import React from 'react';
import { BottomNav } from '../components/BottomNav';
import { CategoryScroll } from '../components/CategoryScroll';
import { Header } from '../components/Header';
import { NearbySalons } from '../components/NearbySalons';
import { RecommendedScroll } from '../components/RecommendedScroll';
import { SearchBar } from '../components/SearchBar';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/ui/button';


export default function HomePage() {
  return (
<div className="min-h-screen pb-24 bg-[var(--color-linen)] text-[var(--color-text-dark)] transition-colors duration-300">
      <Header userName="Croski" location="Shibuya, Tokyo · 150-0002" />
      <SearchBar placeholder="Search salons or services..." />

      <SectionTitle title="Categories" />
      <CategoryScroll categories={["Nails", "Hair", "Brows", "Lashes"]} />

      <SectionTitle title="Recommended" />
      <RecommendedScroll recommendations={[
        { name: 'Velvet Room', discount: 'Free scalp massage with color' },
        { name: 'GlowHaus', discount: '15% off first booking' },
        { name: 'Glossed', discount: 'Free gel top coat' },
      ]} />

      <SectionTitle title="Salons Near You" />
      <NearbySalons salons={[
        {
          name: 'Urban Beauty',
          type: 'Hair & Nails',
          discount: '10% discount on all nail services',
          rating: 4.8,
          distance: '0.8 km',
          image: 'https://via.placeholder.com/400x160',
        },
        {
          name: 'The Blush Co.',
          type: 'Brows & Skin',
          discount: 'Buy 1 brow session, get 1 free',
          rating: 4.6,
          distance: '1.3 km',
          image: 'https://via.placeholder.com/400x160',
        },
        {
          name: 'Lash Luxe',
          type: 'Lashes & Wax',
          discount: 'Free touch-up within 7 days',
          rating: 4.9,
          distance: '2.1 km',
          image: 'https://via.placeholder.com/400x160',
        },
      ]} />

      <div className="flex justify-center my-8">
        <Button className="rounded-full bg-primary text-white px-6 py-2 shadow-lg text-sm">
          Book Your Glow
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
