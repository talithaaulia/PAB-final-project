import React, { useState } from 'react';
import { 
  NativeBaseProvider, HStack, 
  Pressable, Icon, Box, 
  Text, Button, Input 
} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('login');
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center">
      <HStack flexDirection="row" marginX={6}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="black" />
          </Pressable>
        </HStack>
        <Text fontSize={24} mb={8}>Sign Up</Text>
        <Input
          h={10} w="80%" mb={2}
          placeholder="Full Name"
        />
        <Input
          h={10} w="80%" mb={2}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          h={10} w="80%" mb={2}
          placeholder="Password"
          secureTextEntry
        />
        <Button onPress={handleSignUp} w="80%">
          Sign Up
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default SignUpScreen;
