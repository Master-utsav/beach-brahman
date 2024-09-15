import GoogleIcon from '@/assets/icons/GoogleIcon';
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('@/assets/images/screen_signup_bg.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Turtle Image */}
        {/* <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/turtle.png')} 
            style={styles.image}
            resizeMode="contain"
            width={100}
            height={100}
          />
        </View> */}

      
        <Text style={styles.title}>Searesia</Text>
        <Text style={styles.subtitle}>
          Explore the beauty of the Indonesian sea with its various seas and islands
        </Text>

       
        <TouchableOpacity style={styles.googleButton}>
          <GoogleIcon width={24} height={24} />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginTop: 40,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#0e0e10',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 40,
    elevation: 3,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  googleIcon: {
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});

export default HomeScreen;
