// components/SignInScreen.tsx
import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native';
import supabase from '../lib/supabase';
import styles from '../theme/styles';

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = ({ navigation }: any) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Platform.select({
      ios: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
      android: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
      default: 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com',
    }),
    redirectUri: makeRedirectUri({
      native: 'com.yourapp://redirect', // 🔁 match with your app.json scheme
    }),
  });

  useEffect(() => {
    const signInWithSupabase = async () => {
      if (response?.type === 'success') {
        const idToken = response.authentication?.idToken;

        if (!idToken) {
          Alert.alert('Error', 'No ID token returned');
          return;
        }

        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: idToken,
        });

        if (error) {
          Alert.alert('Supabase Error', error.message);
        } else {
          navigation.replace('/home'); // ✅ adjust to your actual home route
        }
      }
    };

    signInWithSupabase();
  }, [response]);

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign In</Text>

      <TouchableOpacity
        onPress={() => promptAsync()}
        disabled={!request}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
