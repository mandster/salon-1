// app/page.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import BookNowModal from '../components/BookNowModal';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';
import CategoryScroll from '../components/CategoryScroll';
import FontProvider from '../components/FontProvider';
import Header from '../components/Header';
import RecommendedScroll from '../components/RecommendedScroll';
import SearchBar from '../components/SearchBar';
import SectionTitle from '../components/SectionTitle';
import styles from '../theme/styles';


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
    <FontProvider>
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
                    image: require('../assets/images/brows.png'),
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
              <Text style={styles.sectionTitle}>🗕️ Your Bookings</Text>
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
    </FontProvider>
  );
}
