// components/RecommendedScroll.tsx
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from '../theme/styles';

type Recommendation = {
  name: string;
  discount: string;
  image: any; // or ImageSourcePropType if using React Native Image
};

type Props = {
  onPress: (salon: string) => void;
  recommendations: Recommendation[];
};

const RecommendedScroll: React.FC<Props> = ({ onPress, recommendations }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.recommendations}
  >
    {recommendations.map((rec, index) => (
      <TouchableOpacity
        key={index}
        style={styles.recommendationCard}
        onPress={() => onPress(rec.name)}
      >
        <Image source={rec.image} style={styles.recommendationImage} />
        <Text style={styles.recommendationTitle}>{rec.name}</Text>
        <Text style={styles.recommendationSubtitle}>{rec.discount}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

export default RecommendedScroll;
