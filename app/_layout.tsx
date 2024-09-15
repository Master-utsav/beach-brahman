import React, { useEffect, useCallback, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'outfit-regular': require('@/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('@/assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('@/assets/fonts/Outfit-Bold.ttf'),
  });

  // Prevent splash screen from auto-hiding
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      async function hideSplash() {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
      hideSplash();
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    // While fonts are loading, show an activity indicator
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
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
