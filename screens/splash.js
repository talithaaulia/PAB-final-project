// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay (e.g., 2000 milliseconds) and then navigate to the main screen
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); // Replace with the name of your main screen
    }, 5000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splashimage.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set the background color of your splash screen
  },
  image: {
    width: 200, // Adjust the width and height as needed
    height: 200,
  },
});

export default SplashScreen;
