import { Slot } from 'expo-router';

if (typeof window !== 'undefined') {
  require('./global.css');
}

export default function Layout() {
  return <Slot />;
}
