import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Href, useRouter, useSegments } from "expo-router";
import HomeIcon from "@/assets/icons/HomeIcon";
import ExploreIcon from "@/assets/icons/ExploreIcon";
import FavoriteIcon from "@/assets/icons/FavoriteIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {

  const { currentRoute, setCurrentRoute } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    setCurrentRoute(segments.join('/'));
  }, [segments, setCurrentRoute]);

  const handleNavigation = (path: string) => {
    if (currentRoute === path) return;
    router.push(path as Href); 
  };

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("/")}
      >
        <HomeIcon color={currentRoute === "" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "" && styles.activeText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("/home")}
      >
        <ExploreIcon color={currentRoute === "explore" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "explore" && styles.activeText]}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("/favorite")}
      >
        <FavoriteIcon color={currentRoute === "favorite" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "favorite" && styles.activeText]}>Favorite</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("/profile")}
      >
        <ProfileIcon color={currentRoute === "profile" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "profile" && styles.activeText]}>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 55,
    backgroundColor: "#000000da",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopColor: "#00C9A7",
  },
  navContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  navItem: {
    fontSize: 12,
    color: "#7D7D7D",
    marginTop: 0,
  },
  activeText: {
    color: "#00C9A7",
  },
});

export default Navbar;
