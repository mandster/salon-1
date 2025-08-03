import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Modal,
    Platform,
    ScrollView,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import DatePicker, { DateType } from 'react-native-ui-datepicker';

import styles from '../theme/styles';
import Button from './Button';
import sendEmailConfirmation from './sendEmailConfirmation';

type Props = {
  visible: boolean;
  onClose: () => void;
  selectedSalon: string;
};

const BookNowModal: React.FC<Props> = ({ visible, onClose, selectedSalon }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);

  useEffect(() => {
    if (visible && selectedSalon) {
      setAvailableSlots(generateMockSlots());
    }
  }, [visible, selectedSalon]);

  const generateMockSlots = () => {
    const slots: Date[] = [];
    for (let hour = 10; hour <= 16; hour++) {
      const slot = new Date();
      slot.setHours(hour, 0, 0, 0);
      slots.push(new Date(slot));
    }
    return slots;
  };

  const normalizeToDate = (input: DateType): Date => {
    if (input instanceof Date) return input;
    if (typeof input === 'string' || typeof input === 'number') return new Date(input);
    if (typeof input === 'object' && 'toDate' in input) return input.toDate();
    return new Date();
  };

  const showToast = (msg: string) => {
    Platform.OS === 'android' ? ToastAndroid.show(msg, ToastAndroid.SHORT) : Alert.alert(msg);
  };

  const saveBooking = async () => {
    if (!name || !service || !date) {
      showToast('Please fill in all fields.');
      return;
    }

    const booking = {
      name,
      service,
      salon: selectedSalon,
      time: date.toISOString(),
      createdAt: Date.now(),
    };

    try {
      const stored = await AsyncStorage.getItem('bookings');
      const bookings = stored ? JSON.parse(stored) : [];
      bookings.push(booking);
      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));

      await sendEmailConfirmation(booking);
      showToast('✅ Booking saved and email sent!');

      setName('');
      setService('');
      onClose();
    } catch (err) {
      console.error(err);
      showToast('Failed to save booking.');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Book at {selectedSalon}</Text>

          <TextInput
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <TextInput
            placeholder="Service"
            value={service}
            onChangeText={setService}
            style={styles.input}
          />

          <Text style={styles.sectionTitle}>Pick a Date:</Text>
          <DatePicker
            mode="single"
            date={dayjs(date)}
            onChange={({ date: selected }) => {
              if (selected) setDate(normalizeToDate(selected));
            }}
          />
          <Text style={{ marginTop: 8, textAlign: 'center', color: '#555' }}>
            Selected: {dayjs(date).format('MMMM D, YYYY')}
          </Text>

          <Text style={styles.sectionTitle}>Select Time Slot:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
            {availableSlots.map((slot, idx) => {
              const isActive = date.getHours() === slot.getHours();
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setDate(new Date(date.setHours(slot.getHours(), 0, 0, 0)))}
                  style={[styles.slot, isActive && styles.slotActive]}
                >
                  <Text style={isActive ? styles.slotTextActive : styles.slotText}>
                    {slot.getHours()}:00
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <Button onPress={saveBooking}>Confirm</Button>
          <Button onPress={onClose}>Cancel</Button>
        </View>
      </View>
    </Modal>
  );
};

export default BookNowModal;
