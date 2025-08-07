// app/_layout.tsx or root layout
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { Text, View } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) return <View><Text>Loading...</Text></View>;

  return <Slot />;
}
