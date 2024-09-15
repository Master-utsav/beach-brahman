// History.tsx

import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { MaterialIcons } from '@expo/vector-icons';
import { HistoryData } from "@/constants/content"; // Assuming you import historyData from a constants file

// Define types for the history items
interface HistoryDataProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  rating: number;
}

// Define props for HistoryCard component
interface HistoryCardProps {
  item: HistoryDataProps;
  onEditDate: (id: string) => void;
  onDelete: (id: string) => void;
}

// Define HistoryCard component
const HistoryCard: React.FC<HistoryCardProps> = ({ item, onEditDate, onDelete }) => {
  const handleEditDate = () => {
    onEditDate(item.id);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
      <Text style={styles.title}>{item.title}</Text>

        <Menu>
          <MenuTrigger>
            <MaterialIcons name="more-vert" size={24} color="black" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={handleEditDate}>
              <Text style={styles.menuText}>Edit Date</Text>
            </MenuOption>
            <MenuOption onSelect={handleDelete}>
              <Text style={styles.menuText}>Delete Item</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <Image source={(item.imageUrl) as any} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.locationText}>{item.subtitle}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={18} color="gold" />
          <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );
};

// Main History component
const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryDataProps[]>(HistoryData);

  const handleEditDate = (id: string) => {
    console.log('Edit date for id:', id);
    // Implement your date picker or date edit logic here
  };

  const handleDelete = (id: string) => {
    setHistory(history.filter(item => item.id !== id));
  };

  return (
    <FlatList
      data={history}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <HistoryCard item={item} onEditDate={handleEditDate} onDelete={handleDelete} />
      )}
      contentContainerStyle={styles.listContainer}
      nestedScrollEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    width: "80%",
    fontWeight: '500',
    color: '#333',
    paddingVertical: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginTop: 10,
  },
  details: {
    marginTop: 10,
  },
  date: {
    backgroundColor: '#F0D9A0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontSize: 16,
    marginLeft: 4,
  },
  menuText: {
    fontSize: 16,
    padding: 10,
  },
});

export default History;
