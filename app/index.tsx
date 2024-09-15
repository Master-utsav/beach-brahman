import GoogleIcon from '@/assets/icons/GoogleIcon';
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { OpenScreenData } from "@/constants/content";


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('@/assets/images/screen_signup_bg.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{OpenScreenData.title}</Text>
          <Text style={styles.description}>
            {OpenScreenData.des1}
          </Text>
          <Text style={styles.description}>
            {OpenScreenData.des2}
          </Text>
        </View>

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
    paddingTop: 36,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    // fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    color: '#f9ece9',
    fontFamily: 'raleway-extrabold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'raleway-regular',
    marginVertical: 5,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 40,
    elevation: 3,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  googleText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    fontFamily: 'raleway-regular',
  },
});

export default HomeScreen;
