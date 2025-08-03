// components/BottomNav.tsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../theme/styles';

type BottomNavProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.nav}>
      {['Search', 'Home', 'Bookings', 'Profile'].map((tab) => (
        <TouchableOpacity key={tab} onPress={() => onTabChange(tab)}>
          <Text style={[styles.navItem, activeTab === tab && styles.navItemActive]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
