// components/ForgotPasswordScreen.tsx
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import supabase from '../lib/supabase';
import styles from '../theme/styles';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Check your inbox', 'Password reset link sent.');
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Reset Password</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
      <TouchableOpacity onPress={handleReset} style={styles.button}><Text style={styles.buttonText}>Send Reset Link</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.link}>Back to Sign In</Text></TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
