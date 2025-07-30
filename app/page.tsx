// app/page.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../theme/styles';

const BottomNav = ({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) => (
  <View style={styles.nav}>
    {['Search', 'Home', 'Bookings', 'Profile'].map(tab => (
      <TouchableOpacity key={tab} onPress={() => onTabChange(tab)}>
        <Text style={[styles.navItem, activeTab === tab && styles.navItemActive]}>{tab}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const CategoryScroll = ({ categories }: { categories: string[] }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
    {categories.map((category, index) => (
      <View key={index} style={styles.category}>
        <Text style={styles.categoryLabel}>{category}</Text>
      </View>
    ))}
  </ScrollView>
);

const Header = ({ userName, location }: { userName: string; location: string }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Hello, {userName}</Text>
    <Text style={styles.locationText}>{location}</Text>
  </View>
);

const RecommendedScroll = ({ recommendations }: { recommendations: { name: string; discount: string }[] }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendations}>
    {recommendations.map((rec, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.cardTitle}>{rec.name}</Text>
        <Text style={styles.cardSubtitle}>{rec.discount}</Text>
      </View>
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

const BookNowModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [time, setTime] = useState('');

  const saveBooking = async () => {
    if (!name || !service || !time) return;
    const booking = { name, service, time, createdAt: Date.now() };
    const existing = await AsyncStorage.getItem('bookings');
    const bookings = existing ? JSON.parse(existing) : [];
    bookings.push(booking);
    await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
    ToastAndroid.show('Booking confirmed!', ToastAndroid.SHORT);
    setName('');
    setService('');
    setTime('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Book Your Appointment</Text>
          <TextInput placeholder="Your Name" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Service" value={service} onChangeText={setService} style={styles.input} />
          <TextInput placeholder="Time" value={time} onChangeText={setTime} style={styles.input} />
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
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'Home' && (
          <>
            <Header userName="Croski" location="Shibuya, Tokyo · 150-0002" />
            <SearchBar placeholder="Search salons or services..." />

            <SectionTitle title="Categories" />
            <CategoryScroll categories={["Nails", "Hair", "Brows", "Lashes"]} />

            <SectionTitle title="Recommended" />
            <RecommendedScroll
              recommendations={[
                { name: 'Velvet Room', discount: 'Free scalp massage with color' },
                { name: 'GlowHaus', discount: '15% off first booking' },
                { name: 'Glossed', discount: 'Free gel top coat' },
              ]}
            />

            <View style={styles.bookButtonContainer}>
              <Button onPress={() => setModalVisible(true)}>Book Now</Button>
              <Button onPress={() => router.push('/nearby')}>Find Salons Nearby</Button>
            </View>
          </>
        )}

        {activeTab === 'Bookings' && (
          <View style={styles.section}><Text>📅 Bookings screen coming soon!</Text></View>
        )}

        {activeTab === 'Profile' && (
          <View style={styles.section}><Text>👤 Profile screen coming soon!</Text></View>
        )}
      </ScrollView>
      <BookNowModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </SafeAreaView>
  );
}
