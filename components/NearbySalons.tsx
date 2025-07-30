// components/NearbySalons.tsx
'use client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Modal, Platform, Pressable, ScrollView, Text, ToastAndroid, View } from 'react-native';

const getSalonHref = (id: string) => ({ pathname: '/salon/[id]/page', params: { id } });

type Salon = {
  id: string;
  name: string;
  type: string;
  discount: string;
  rating: number;
  distance: string;
  image: string;
};

export const NearbySalons = ({ salons }: { salons: Salon[] }) => {
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const openBookingModal = (salon: Salon) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedSalon(salon);
    setShowPicker(true);
  };

  const handleDateChange = (event: any, date?: Date) => {
    if (Platform.OS !== 'ios') setShowPicker(false);
    if (date) setSelectedDate(date);
  };

  const confirmBooking = async () => {
    if (!selectedSalon || !selectedDate) return;
    const booking = {
      id: selectedSalon.id,
      name: selectedSalon.name,
      datetime: selectedDate.toISOString(),
    };
    try {
      const existing = await AsyncStorage.getItem('bookings');
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.push(booking);
      await AsyncStorage.setItem('bookings', JSON.stringify(parsed));
      if (Platform.OS === 'android') {
        ToastAndroid.show('Booking Confirmed', ToastAndroid.SHORT);
      } else {
        Alert.alert('Booking Confirmed');
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (e) {
      console.error('Failed to save booking', e);
    } finally {
      setShowPicker(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 120 }}>
      {salons.map((salon) => (
        <View
          key={salon.id}
          style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            marginBottom: 24,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#e5e7eb',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <Link href={getSalonHref(salon.id)} asChild>
            <Image
              source={{ uri: salon.image }}
              style={{ width: '100%', height: 160, resizeMode: 'cover' }}
            />
          </Link>
          <View style={{ padding: 16 }}>
            <Text
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                fontSize: 18,
                color: '#D2042D',
              }}
            >
              ❤️
            </Text>
            <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 4 }}>
              {salon.name}
            </Text>
            <Text style={{ fontSize: 14, color: '#374151', marginBottom: 2 }}>
              {salon.type}
            </Text>
            <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 4 }}>
              {salon.discount}
            </Text>
            <Text style={{ fontSize: 14, color: '#9CA3AF' }}>
              ⭐ {salon.rating} · {salon.distance} away
            </Text>
            <Pressable
              style={{ marginTop: 12, padding: 10, backgroundColor: '#D2042D', borderRadius: 8 }}
              onPress={() => openBookingModal(salon)}
            >
              <Text style={{ color: '#fff', textAlign: 'center' }}>Book Now</Text>
            </Pressable>
          </View>
        </View>
      ))}

      {showPicker && (
        <Modal
          visible={showPicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowPicker(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: '#fff', margin: 20, borderRadius: 12, padding: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
                Book Appointment at {selectedSalon?.name}
              </Text>
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="datetime"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={handleDateChange}
              />
              <Pressable
                style={{ marginTop: 16, backgroundColor: '#D2042D', padding: 12, borderRadius: 10 }}
                onPress={confirmBooking}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};
