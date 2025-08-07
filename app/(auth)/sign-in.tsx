// components/SignInScreen.tsx
import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native';
import supabase from '../../lib/supabase';
import styles from '../../theme/styles';

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
  const router = useRouter();

const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  clientId: Platform.select({
    ios: '888160856476-sdc94l0oodd6sc7pb4qssb0uj6sab1pu.apps.googleusercontent.com',
    android: '888160856476-sdc94l0oodd6sc7pb4qssb0uj6sab1pu.apps.googleusercontent.com',
    default: '888160856476-sdc94l0oodd6sc7pb4qssb0uj6sab1pu.apps.googleusercontent.com',
  }),
  redirectUri: makeRedirectUri({
    scheme: 'com.salon', // must match app.json
    native: 'com.salon://redirect', // custom scheme for standalone apps
  }),
});

  useEffect(() => {
    const authenticate = async () => {
      if (response?.type === 'success') {
        const idToken = response.authentication?.idToken;

        if (!idToken) {
          Alert.alert('Error', 'No ID token received.');
          return;
        }

        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: idToken,
        });

        if (error) Alert.alert('Supabase Error', error.message);
        else router.replace('/');
      }
    };

    authenticate();
  }, [response]);

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign In</Text>

      <TouchableOpacity onPress={() => promptAsync()} disabled={!request} style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
