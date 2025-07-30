// app/salon/[id]/page.tsx

'use client';
import { useLocalSearchParams } from 'expo-router';

export default function SalonPage() {
  const { id } = useLocalSearchParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Salon ID: {id}</h1>
    </div>
  );
}
