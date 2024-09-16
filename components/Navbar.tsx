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
    console.log(currentRoute);
    if (currentRoute === path) return;
    router.push(path as Href); 
  };

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("(tabs)")}
      >
        <HomeIcon color={currentRoute === "(tabs)" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "(tabs)" && styles.activeText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("(tabs)/explore")}
      >
        <ExploreIcon color={currentRoute === "(tabs)/explore" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "(tabs)/explore" && styles.activeText]}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("(tabs)/favorite")}
      >
        <FavoriteIcon color={currentRoute === "(tabs)/favorite" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "(tabs)/favorite" && styles.activeText]}>Favorite</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navContent}
        onPress={() => handleNavigation("(tabs)/profile")}
      >
        <ProfileIcon color={currentRoute === "(tabs)/profile" ? "#00C9A7" : "#7D7D7D"} />
        <Text style={[styles.navItem, currentRoute === "(tabs)/profile" && styles.activeText]}>Profile</Text>
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
