import React from "react";
import { Stack } from "expo-router";
import { MenuProvider } from "react-native-popup-menu";

const HomeAfterLoginScreen = () => {
  return (
    <MenuProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </MenuProvider>
  );
};

export default HomeAfterLoginScreen;
