// app/nearby.tsx
import React from 'react';
import { View } from 'react-native';
import { NearbySalons } from '../components/NearbySalons';

const mockSalons = [
  {
    id: 'glow-and-go',
    name: 'Glow & Go',
    type: 'Hair & Makeup',
    discount: '20% off for new customers',
    rating: 4.8,
    distance: '1.2 km',
    image: 'https://source.unsplash.com/600x400/?salon',
  },
  {
    id: 'zen-cuts',
    name: 'Zen Cuts',
    type: 'Beard & Spa',
    discount: 'Free head massage with trim',
    rating: 4.6,
    distance: '2.5 km',
    image: 'https://source.unsplash.com/600x400/?barber',
  },
];

export default function NearbyPage() {
  return (
    <View style={{ flex: 1 }}>
      <NearbySalons salons={mockSalons} />
    </View>
  );
}
