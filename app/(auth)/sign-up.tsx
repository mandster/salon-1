// components/SignUpScreen.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import supabase from '../../lib/supabase';
import styles from '../../theme/styles';

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Success', 'Check your email for confirmation link.');
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
< TouchableOpacity onPress={ () => router.push('/(auth)/sign-in') } >
  <Text>Back to Sign In</Text>
</TouchableOpacity>


    </View>
  );
};

export default SignUpScreen;
