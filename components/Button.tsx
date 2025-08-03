// components/Button.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../theme/styles';

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);

export default Button;
