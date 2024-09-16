import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BeachData, OpenScreenData } from "@/constants/content";
import SearchBar from "@/components/SearchBar";
import LocationIcon from "@/assets/icons/LocationIcon"; // Ensure this is the correct path
import History from "@/components/History";
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from "react-native-popup-menu";
import { clerkUserDataRequiredProps } from "@/constants/content";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import logout from "../logout";
import { useUser } from "@clerk/clerk-expo";
import { extractUserData } from "../login";

const combinedData = [
  { type: "header" },
  { type: "locationSearch" },
  { type: "popular", data: BeachData },
  { type: "history" },
];

function HomeComponent() {
 
  
  const router = useRouter();

  const {user} = useUser();

  const renderItem = ({ item }: any) => {
    switch (item.type) {
      case "header":
        return (
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.appTitle}>{OpenScreenData.title}</Text>

            {/* Dropdown for Profile Image */}
            <Menu>
              <MenuTrigger>
                {user?.imageUrl ? (
                  <Image
                    source={{ uri: user?.imageUrl }}
                    style={styles.profileImage}
                  />
                ) : (
                  <Image
                    source={require("@/assets/images/profile1.png")}
                    style={styles.profileImage}
                  />
                )}
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => { router.push('/logout') }}>
                  <Text style={styles.menuOptionText}>Logout</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        );
      case "locationSearch":
        return (
          <View style={styles.locationSearchContainer}>
            <View style={styles.locationAndNameContainer}>
              <View style={styles.usernameContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                {user?.firstName ? (
                  <Text style={styles.userNameText}>{user?.firstName}</Text>
                ) : (
                  <Text style={styles.userNameText}>User</Text>
                )}
              </View>
              <View style={styles.locationContainer}>
                <LocationIcon />
                <Text style={styles.provinceText}>Indore</Text>
              </View>
            </View>
            <View style={styles.searchContainer}>
              <SearchBar />
            </View>
          </View>
        );
      case "popular":
        return (
          <>
            <View style={styles.popularHeader}>
              <Text style={styles.popularTitle}>Popular</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={item.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <View style={styles.cardContent}>
                    <Image source={item.link} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  </View>
                  <View style={styles.cardFooter}>
                    {item.added ? (
                      <View style={styles.addedContainer}>
                        <Ionicons
                          name="checkmark-circle"
                          size={20}
                          color="green"
                        />
                        <Text style={styles.addedText}>Added</Text>
                      </View>
                    ) : (
                      <TouchableOpacity style={styles.addListContainer}>
                        <Ionicons
                          name="add-circle-outline"
                          size={20}
                          color="gray"
                        />
                        <Text style={styles.addListText}>Add List</Text>
                      </TouchableOpacity>
                    )}
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              )}
            />
          </>
        );
      case "history":
        return (
          <>
            <View style={styles.popularHeader}>
              <Text style={styles.popularTitle}>History</Text>
            </View>
            <History />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={combinedData}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.type}-${index}`}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default function HomeScreen() {
  return (
    <MenuProvider>
      <HomeComponent />
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    paddingHorizontal: 16,
    backgroundColor: "#E6F7E9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  appTitle: {
    fontSize: 24,
    fontFamily: "raleway-extrabold",
    color: "#2C3E50",
    textAlign: "center",
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuOptionText: {
    fontSize: 18,
    padding: 10,
    color: "#3498DB",
  },
  locationSearchContainer: {
    marginBottom: 16,
  },
  locationAndNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  usernameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  searchContainer: {
    marginBottom: 5,
  },
  provinceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006466",
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006466",
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  popularTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  seeAllText: {
    color: "#3498DB",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    width: 180,
    marginRight: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardContent: {
    height: 200,
    justifyContent: "center",
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#7F8C8D",
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  addedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addedText: {
    color: "#3498DB",
    marginLeft: 4,
  },
  addListContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addListText: {
    color: "#95A5A6",
    marginLeft: 4,
  },
  ratingText: {
    color: "#E74C3C",
  },
});
