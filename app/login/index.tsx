import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { clerkUserDataRequiredProps, OpenScreenData } from "@/constants/content";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useAuth } from "@/context/AuthContext";
import * as WebBrowser from "expo-web-browser";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import * as Linking from 'expo-linking';
import { useRouter } from "expo-router";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
}

// This ensures the OAuth session is handled correctly
WebBrowser.maybeCompleteAuthSession();

// Extract and format user data from Clerk
export function extractUserData(clerkUserDataFormate: any): clerkUserDataRequiredProps {
  const user = clerkUserDataFormate?.user;
  return {
    user,
    isSignedIn: clerkUserDataFormate?.isSignedIn,
    firstName: user?.firstName || null,
    lastName: user?.lastName || null,
    fullName: user?.fullName || null,
    email: user?.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : null,
    phoneNumber: user?.phoneNumbers && user.phoneNumbers.length > 0 ? user.phoneNumbers[0] : null,
    image: user?.imageUrl || null,
    username: user?.username || null,
    id: user?.id || null,
  };
}

export default function LoginScreen() {
  // Warm up browser to speed up the OAuth flow
  useWarmUpBrowser();

  const { setAuthenticated, setUserLoginData } = useAuth();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const { user, isLoaded } = useUser(); // Clerk's user data
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onPress = useCallback(async () => {
    setLoading(true); // Start loading indicator
    try {
      if (user && isLoaded) {
        const data = extractUserData( user);
        setUserLoginData(data as clerkUserDataRequiredProps);
        setAuthenticated(true);
         console.log("user data of 1 : ",user)
        router.replace('/(tabs)/home');
        return;
      }
      
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        const data = extractUserData(user);
        setUserLoginData(data as clerkUserDataRequiredProps);
        setAuthenticated(true);
        console.log("user data of 2: ",user)
        router.replace('/(tabs)/home');
      } else if (signIn || signUp) {
        console.log('User signed in:', signIn);
        console.log('User signed up:', signUp);
      }
    } catch (err) {
      console.error('OAuth error', err);
      setAuthenticated(false);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  }, [user, isLoaded]);

  // If the user is already logged in, redirect to the home screen immediately
  useEffect(() => {
    if (user && isLoaded) {
      router.replace('/(tabs)/home');
    }
  }, [user, isLoaded]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/screen_signup_bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{OpenScreenData.title}</Text>
          <Text style={styles.description}>{OpenScreenData.des1}</Text>
          <Text style={styles.description}>{OpenScreenData.des2}</Text>
        </View>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={onPress}
          disabled={loading} // Disable button during OAuth flow
        >
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <>
              <GoogleIcon width={24} height={24} />
              <Text style={styles.googleText}>Login with Google</Text>
            </>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    color: "#f9ece9",
    fontFamily: "raleway-extrabold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    fontFamily: "raleway-regular",
    marginVertical: 5,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 40,
    elevation: 3,
    borderColor: "#d3d3d3",
    borderWidth: 1,
  },
  googleText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
    fontFamily: "raleway-regular",
  },
});
