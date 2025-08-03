// components/SectionTitle.tsx
import React from 'react';
import { Text, View } from 'react-native'; // Assuming React Native components

interface SectionTitleProps {
  title: string;
}

// Ensure it's a named export
 function SectionTitle({ title }: SectionTitleProps) {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}

export default SectionTitle
