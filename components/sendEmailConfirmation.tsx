// components/BookNowModal.tsx
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
import sendEmailConfirmation from './sendEmailConfirmation';

interface BookNowModalProps {
  visible: boolean;
  onClose: () => void;
  selectedSalon: string;
}

const getMockSlots = (salon: string): Date[] => {
  const slots: Date[] = [];
  for (let hour = 10; hour <= 16; hour++) {
    const slot = new Date();
    slot.setHours(hour, 0, 0, 0);
    slots.push(new Date(slot));
  }
  return slots;
};

const showToast = (msg: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert('Booking Status', msg);
  }
};

const BookNowModal: React.FC<BookNowModalProps> = ({ visible, onClose, selectedSalon }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);

  useEffect(() => {
    if (visible && selectedSalon) {
      setAvailableSlots(getMockSlots(selectedSalon));
    }
  }, [visible, selectedSalon]);

  const normalizeToDate = (input: DateType): Date => {
    if (input instanceof Date) return input;
    if (typeof input === 'string' || typeof input === 'number') return new Date(input);
    if (typeof input === 'object' && 'toDate' in input) return input.toDate();
    return new Date();
  };

  const saveBooking = async () => {
    if (!name || !service || !date) {
      showToast('Please complete all fields.');
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
      const existing = await AsyncStorage.getItem('bookings');
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.push(booking);
      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));

      sendEmailConfirmation(booking);
      setName('');
      setService('');
      onClose();
    } catch (err) {
      showToast('Error saving booking.');
      console.error('Booking save error:', err);
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
          <View style={{ marginBottom: 8 }}>
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
          </View>

          <Text style={styles.sectionTitle}>Select Time Slot:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
            {availableSlots.map((slot, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setDate(new Date(date.setHours(slot.getHours(), 0, 0, 0)))}
                style={[
                  styles.slot,
                  date.getHours() === slot.getHours() && styles.slotActive,
                ]}
              >
                <Text
                  style={
                    date.getHours() === slot.getHours()
                      ? styles.slotTextActive
                      : styles.slotText
                  }
                >
                  {slot.getHours()}:00
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.button} onPress={saveBooking}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BookNowModal;
