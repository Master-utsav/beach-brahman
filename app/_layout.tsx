import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

SplashScreen.preventAutoHideAsync(); // Prevent auto-hide of splash screen

export default function App() {
  const [fontsLoaded] = useFonts({
    'raleway-regular': require('@/assets/fonts/static/Raleway-Regular.ttf'),
    'raleway-medium': require('@/assets/fonts/static/Raleway-Medium.ttf'),
    'raleway-bold': require('@/assets/fonts/static/Raleway-SemiBold.ttf'),
    'raleway-extrabold': require('@/assets/fonts/static/Raleway-ExtraBold.ttf'),
    'outfit-bold' : require('@/assets/fonts/Outfit-Bold.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loaderContainer} />;
  }

  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="explore" options={{ headerShown: false }} />
          <Stack.Screen name="favorite" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
        <Navbar />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
