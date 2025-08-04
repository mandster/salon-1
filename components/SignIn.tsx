// components/SignInScreen.tsx
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import supabase from '../lib/supabase';
import styles from '../theme/styles';

const SignInScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Error', error.message);
    else navigation.replace('Home');
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <TouchableOpacity onPress={handleSignIn} style={styles.button}><Text style={styles.buttonText}>Sign In</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.link}>Don't have an account? Sign Up</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}><Text style={styles.link}>Forgot Password?</Text></TouchableOpacity>
    </View>
  );
};
