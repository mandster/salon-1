// app/page.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import emailjs from 'emailjs-com';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker, { DateType } from 'react-native-ui-datepicker';
import styles from '../theme/styles';

import dayjs from 'dayjs';
import 'dayjs/locale/en'; // or any other locale you actually want

dayjs.locale('en');


const BottomNav = ({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) => (
  <View style={styles.nav}>
    {['Search', 'Home', 'Bookings', 'Profile'].map(tab => (
      <TouchableOpacity key={tab} onPress={() => onTabChange(tab)}>
        <Text style={[styles.navItem, activeTab === tab && styles.navItemActive]}>{tab}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const CategoryScroll = ({ categories }: { categories: { name: string; image: any }[] }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
    {categories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryCard}>
        <Image source={category.image} style={styles.cardImage} />
        <Text style={styles.categoryLabel}>{category.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const Header = ({ userName, location }: { userName: string; location: string }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Hello, {userName}</Text>
    <Text style={styles.locationText}>{location}</Text>
  </View>
);

const RecommendedScroll = ({
  onPress,
  recommendations,
}: {
  onPress: (salon: string) => void;
  recommendations: { name: string; discount: string; image: any }[];
}) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendations}>
    {recommendations.map((rec, index) => (
      <TouchableOpacity key={index} style={styles.recommendationCard} onPress={() => onPress(rec.name)}>
        <Image source={rec.image} style={styles.recommendationImage} />
        <Text style={styles.recommendationTitle}>{rec.name}</Text>
        <Text style={styles.recommendationSubtitle}>{rec.discount}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const SearchBar = ({ placeholder }: { placeholder: string }) => (
  <View style={styles.searchBar}>
    <Text style={styles.searchText}>{placeholder}</Text>
  </View>
);

const SectionTitle = ({ title }: { title: string }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const Button = ({ children, onPress }: { children: React.ReactNode; onPress?: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);

const getMockSlots = (salon: string) => {
  const slots = [];
  for (let i = 10; i <= 16; i++) {
    const slot = new Date();
    slot.setHours(i);
    slot.setMinutes(0);
    slot.setSeconds(0);
    slot.setMilliseconds(0);
    slots.push(new Date(slot));
  }
  return slots;
};

const sendEmailConfirmation = (booking: any) => {
  return emailjs.send('service_jfz0fiv', 'template_dhd5tum', {
    user_name: booking.name,
    service_name: booking.service,
    salon_name: booking.salon,
    booking_time: new Date(booking.time).toLocaleString(),
  }, 'qannae3Dv_syM3uRj');
};

const BookNowModal = ({ visible, onClose, selectedSalon }: { visible: boolean; onClose: () => void; selectedSalon: string }) => {
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
  if (dayjs.isDayjs(input)) return input.toDate();
  if (input instanceof Date) return input;
  return new Date(input);
};

const showToast = (msg: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert('Booking Status', msg);
  }
};

const saveBooking = async () => {
  if (!name || !service || !date) return;
  const booking = { name, service, salon: selectedSalon, time: date.toISOString(), createdAt: Date.now() };
  const existing = await AsyncStorage.getItem('bookings');
  const bookings = existing ? JSON.parse(existing) : [];
  bookings.push(booking);
  await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
  
  sendEmailConfirmation(booking)
    .then(() => {
      showToast('✅ Booking confirmed & email sent!');
    })
    .catch(() => {
      showToast('Booking saved. Failed to send email.');
    });

  setName('');
  setService('');
  onClose();
};

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Book at {selectedSalon}</Text>
          <TextInput placeholder="Your Name" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Service" value={service} onChangeText={setService} style={styles.input} />

  <Text style={styles.sectionTitle}>Pick a Date:</Text>
<View style={{ marginBottom: 16 }}>
  <DatePicker
    mode="single"
    date={dayjs(date)}
    onChange={({ date: selected }) => {
      if (selected) {
        setDate(normalizeToDate(selected));
      }
    }}
    locale="en"
  />
</View>


          <Text style={styles.sectionTitle}>Select Time Slot:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
            {availableSlots.map((slot, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setDate(new Date(date.setHours(slot.getHours(), 0, 0, 0)))}
                style={[styles.slot, date.getHours() === slot.getHours() && styles.slotActive]}
              >
                <Text style={date.getHours() === slot.getHours() ? styles.slotTextActive : styles.slotText}>
                  {slot.getHours()}:00
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Button onPress={saveBooking}>Confirm</Button>
          <Button onPress={onClose}>Cancel</Button>
        </View>
      </View>
    </Modal>
  );
};

export default function HomePage() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState('');
  const [activeTab, setActiveTab] = useState('Home');
  const [bookings, setBookings] = useState<any[]>([]);

  const loadBookings = async () => {
    const stored = await AsyncStorage.getItem('bookings');
    const parsed = stored ? JSON.parse(stored) : [];
    setBookings(parsed);
  };

  useEffect(() => {
    if (activeTab === 'Bookings') {
      loadBookings();
    }
  }, [activeTab]);

  const handleBookPress = (salon: string) => {
    setSelectedSalon(salon);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'Home' && (
          <>
            <Header userName="Croski" location="Shibuya, Tokyo · 150-0002" />
            <SearchBar placeholder="Search salons or services..." />

            <SectionTitle title="Categories" />
            <CategoryScroll
              categories={[
                { name: 'Hair', image: require('../assets/images/hair.png') },
                { name: 'Nails', image: require('../assets/images/nails.png') },
                { name: 'Brows', image: require('../assets/images/brows.png') },
                { name: 'Lashes', image: require('../assets/images/lashes.png') },
                { name: 'Bridal', image: require('../assets/images/bridal.png') },
              ]}
            />

            <SectionTitle title="Recommended" />
            <RecommendedScroll
              onPress={handleBookPress}
              recommendations={[
                {
                  name: 'Velvet Room',
                  discount: 'Free scalp massage',
                  image: require('../assets/images/hair.png'),
                },
                {
                  name: 'GlowHaus',
                  discount: '15% off first visit',
                  image: require('../assets/images/hair.png'),
                },
              ]}
            />

            <View style={styles.bookButtonContainer}>
              <Button onPress={() => setModalVisible(true)}>Book Now</Button>
              <Button onPress={() => router.push('/nearby')}>Find Salons Nearby</Button>
            </View>
          </>
        )}

        {activeTab === 'Bookings' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📅 Your Bookings</Text>
            {bookings.map((b, i) => (
              <View key={i} style={styles.bookingItem}>
                <Text style={styles.bookingText}>{b.name} booked {b.service} at {b.salon}</Text>
                <Text style={styles.bookingTime}>{new Date(b.time).toLocaleString()}</Text>
              </View>
            ))}
          </View>
        )}

        {activeTab === 'Profile' && (
          <View style={styles.section}><Text>👤 Profile screen coming soon!</Text></View>
        )}
      </ScrollView>
      <BookNowModal visible={modalVisible} onClose={() => setModalVisible(false)} selectedSalon={selectedSalon} />
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </SafeAreaView>
  );
}
