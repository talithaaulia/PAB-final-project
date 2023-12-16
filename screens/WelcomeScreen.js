import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { NativeBaseProvider, Box, Text, Button,HStack} from 'native-base';

const WelcomeScreen = ({ navigation }) => {
  const [isLoggedIn,] = useState(false);

  const handleLogin = () => {
    navigation.navigate('login');
  };

  const handleSignUp = () => {
    navigation.navigate('signup');
  };

  const handleTentangKami = () => {
    navigation.navigate('tentangkami');
  };

  const handleFAQ = () => {
    navigation.navigate('FAQ');
  };

  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box alignItems="center" p={4}>
          <Image source={require('../assets/images/welcome1.png')} mt={2} />

          <Text color="#f96163" fontSize={15} fontWeight="bold">
            Resep Mudah dengan Handphone
          </Text>

          <Text fontSize="xl" fontWeight="bold" color="#3c444c" mt={30} mb={25}>
            Klik untuk memulai
          </Text>

          <Button onPress={handleLogin} bg="#f96163" borderRadius={18} py={18} w="50%" alignItems="center" mb={4}>
            <Text fontSize={18} color="#fff" fontWeight="800">
              Login Disini
            </Text>
          </Button>

          {!isLoggedIn && (
            <>
              <Button onPress={handleSignUp} variant="link">
              <Text color="danger.500" fontSize="md">
                  Belum punya akun? Sign Up disini
                </Text>
              </Button>
            </>
          )}

<HStack>
            <Button onPress={handleTentangKami} variant="link">
              <Text color="danger.500" fontSize="md">
                About Us
              </Text>
            </Button>

            <Button onPress={handleFAQ} variant="link">
              <Text color="danger.500" fontSize="md">
                FAQ
              </Text>
            </Button>
          </HStack>


        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;
