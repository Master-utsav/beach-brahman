import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import { useClerk } from "@clerk/clerk-expo";
import { clerkUserDataRequiredProps } from "@/constants/content";

export default function LogoutScreen() {
  const { setAuthenticated, setUserLoginData } = useAuth();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
        const emptyUserData: clerkUserDataRequiredProps = {
            user: null,
            isSignedIn: false,
            firstName: '',
            lastName: '',
            fullName: null,
            email: null,
            phoneNumber: null,
            image: null,
            username: null,
            id: null
        };
        setUserLoginData(emptyUserData);
        setAuthenticated(false);

      // Sign out from Clerk
      await signOut();

      // Redirect to the login screen
      router.replace("/login");
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.message}>Are you sure you want to log out?</Text>

        <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  content: {
    alignItems: "center",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
