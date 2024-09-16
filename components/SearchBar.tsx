import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchPlaceholder } from '@/constants/content';
import SearchIcon from '@/assets/icons/SearchIcon';

const SearchBar = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (SearchPlaceholder && SearchPlaceholder.length > 0) {
      const interval = setInterval(() => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % SearchPlaceholder.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <View style={styles.searchContainer}>
      <SearchIcon />
      <TextInput
        style={styles.searchInput}
        placeholder={SearchPlaceholder[placeholderIndex] || 'Search...'} 
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 5 
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  }
});

export default SearchBar;
