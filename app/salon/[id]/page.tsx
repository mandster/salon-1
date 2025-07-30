// app/salon/[id].tsx
'use client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import salons from '../../../data/salons';

export default function SalonDetailPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const salon = salons.find((s) => s.id === id);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const loadFavorite = async () => {
      const stored = await AsyncStorage.getItem(`fav-${id}`);
      setFavorited(stored === 'true');
    };
    loadFavorite();
  }, [id]);

  const toggleFavorite = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const newVal = !favorited;
    setFavorited(newVal);
    await AsyncStorage.setItem(`fav-${id}`, newVal.toString());
  };

  if (!salon) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Salon not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F0ECE2' }}>
      <Image
        source={{ uri: salon.image }}
        style={{ width: '100%', height: 240, resizeMode: 'cover' }}
      />
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
          <Pressable onPress={() => router.back()}>
            <Text style={{ fontSize: 18 }}>⬅️ Back</Text>
          </Pressable>
          <Pressable onPress={toggleFavorite}>
            <Text style={{ fontSize: 18 }}>{favorited ? '❤️' : '🤍'}</Text>
          </Pressable>
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4 }}>{salon.name}</Text>
        <Text style={{ fontSize: 14, color: '#555', marginBottom: 4 }}>{salon.type}</Text>
        <Text style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>{salon.discount}</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>⭐ {salon.rating} · {salon.distance} away</Text>

        <Pressable
          style={{
            backgroundColor: '#D2042D',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 50,
            marginTop: 24,
            alignSelf: 'center',
          }}
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Book Now</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
