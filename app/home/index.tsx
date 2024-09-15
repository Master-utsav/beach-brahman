import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BeachData, OpenScreenData } from '@/constants/content';
import SearchBar from '@/components/SearchBar';
import LocationIcon from '@/assets/icons/LocationIcon'; // Ensure this is the correct path
import History from '@/components/History';

const combinedData = [
  { type: 'header' },
  { type: 'locationSearch' },
  { type: 'popular', data: BeachData },
  { type: 'history' },
];

const HomeScreen = () => {
  const renderItem = ({ item }:any) => {
    switch (item.type) {
      case 'header':
        return (
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/logo.jpg")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <Text style={styles.appTitle}>{OpenScreenData.title}</Text>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/profile1.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        );
      case 'locationSearch':
        return (
          <>
            <View style={styles.locationContainer}>
              <LocationIcon />
              <Text style={styles.provinceText}>Indore</Text>
            </View>
            <View style={styles.searchContainer}>
              <SearchBar />
            </View>
          </>
        );
      case 'popular':
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
                        <Ionicons name="checkmark-circle" size={20} color="green" />
                        <Text style={styles.addedText}>Added</Text>
                      </View>
                    ) : (
                      <TouchableOpacity style={styles.addListContainer}>
                        <Ionicons name="add-circle-outline" size={20} color="gray" />
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
      case 'history':
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
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    paddingHorizontal: 16,
    backgroundColor: '#E6F7E9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 24,
    fontFamily: 'raleway-extrabold',
    color: '#2C3E50',
    textAlign: 'center',
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  provinceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginLeft: 8,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  popularTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  seeAllText: {
    color: '#3498DB',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: 180,
    marginRight: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardContent: {
    height: 200,
    justifyContent: 'center',
  },
  cardImage: {
    height: 100,
    width: '100%',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  addedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addedText: {
    color: '#3498DB',
    marginLeft: 4,
  },
  addListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addListText: {
    color: '#7F8C8D',
    marginLeft: 4,
  },
  ratingText: {
    color: '#3498DB',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
