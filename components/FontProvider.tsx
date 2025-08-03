// components/FontProvider.tsx
import { useFonts } from 'expo-font';
import React from 'react';
import { Text } from 'react-native';

 function FontProvider({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>; // Optional: Replace with a loading spinner
  }

  return <>{children}</>;
}

export default FontProvider