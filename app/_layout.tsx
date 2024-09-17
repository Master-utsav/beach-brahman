import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import {
  ClerkProvider,
  ClerkLoaded,
} from "@clerk/clerk-expo";
// import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from "@env";
import * as SecureStore from "expo-secure-store";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      item
        ? console.log(`${key} was used 🔐`)
        : console.log(`No values stored under key: ${key}`);
      return item;
    } catch (error) {
      console.error("SecureStore get item error:", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error("SecureStore save item error:", error);
    }
  },
};

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loading, setLoading] = React.useState<Boolean>(true);

  const [fontsLoaded] = useFonts({
    "raleway-regular": require("@/assets/fonts/static/Raleway-Regular.ttf"),
    "raleway-medium": require("@/assets/fonts/static/Raleway-Medium.ttf"),
    "raleway-bold": require("@/assets/fonts/static/Raleway-SemiBold.ttf"),
    "raleway-extrabold": require("@/assets/fonts/static/Raleway-ExtraBold.ttf"),
    "outfit-bold": require("@/assets/fonts/Outfit-Bold.ttf"),
  });

  React.useEffect(() => {
    async function initialize() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setLoading(false);
      }
    }
    initialize();
  }, [fontsLoaded]);

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <AuthProvider>
          <Stack>
            {loading ? null : (
              <Stack.Screen name="index" options={{ headerShown: false }} />
            )}
            <Stack.Screen name="login/index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{headerShown : false}} />
            {/* Add the logout screen */}
            <Stack.Screen name="logout/index" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
