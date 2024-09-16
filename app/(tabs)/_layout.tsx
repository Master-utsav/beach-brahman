import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import HomeIcon from "@/assets/icons/HomeIcon";
import ExploreIcon from "@/assets/icons/ExploreIcon";
import FavoriteIcon from "@/assets/icons/FavoriteIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { Colors } from "@/constants/Colors";
import { useUser,  } from "@clerk/clerk-expo";
import { useAuth } from "@/context/AuthContext";
import { clerkUserDataRequiredProps } from "@/constants/content";

export default function Layout() {
 
   return (
    <SafeAreaView style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.Navshow,  
          tabBarInactiveTintColor: "#7D7D7D",    
          tabBarStyle: styles.tabBar,            
          headerShown: false,                     
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <HomeIcon color={focused ? Colors.Navshow : "#fff"} />
            ),
          }}
        />
        
        {/* Explore Tab */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <ExploreIcon color={focused ? Colors.Navshow : "#fff"} />
            ),
          }}
        />

        {/* Favorite Tab */}
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <FavoriteIcon color={focused ? Colors.Navshow : "#fff"} />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <ProfileIcon color={focused ? Colors.Navshow : "#fff"} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",  
  },
  tabBar: {
    backgroundColor: "#1E1E1Ef6",  
    borderTopWidth: 0,  
    position: "absolute",  
    bottom: 0,  
    left: 0,
    right: 0,
    height: 54,  
    borderRadius: 20,  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,  
    paddingBottom: 3,
  },
});
