import React, { useState } from 'react';
import { 
  NativeBaseProvider, HStack, 
  Pressable, Icon, Box, 
  Text, Button, Input 
} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";
import FIREBASE from '../config';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => { 
    navigation.navigate('signup');
  };

  const handleLogin = async () => {
    try {
      const response = await FIREBASE.auth().signInWithEmailAndPassword(username, password);
      console.log('User signed in successfully!', response.user);
      navigation.navigate("RecipeList");
    } catch (error) {
      console.error('Login failed.', error);
      // Handle login error (show an error message, etc.)
    }
  };
  

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" bgColor="white">
      <HStack flexDirection="row" marginX={6}>
        <Pressable           
          position="absolute"
          bottom={150}
          right={150}
          onPress={() => navigation.goBack()}
        >
          <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="#f96163" />
        </Pressable>
      </HStack>
        <Box
          bgColor="#f96163"
          borderRadius="10"
          p="30"
        >
          <Text fontSize={24} fontWeight="bold" mb={8} textAlign="center" color="white">^^ LOGIN ^^</Text>
          <Input
            h={12} w="90%" mb={8}
            borderWidth={3} borderColor="white"
            placeholder="Email" placeholderTextColor="white"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <Input
            h={12} w="90%" mb={8}
            borderWidth={3} borderColor="white"
            placeholder="Password" placeholderTextColor="white"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Button onPress={handleLogin} 
            m={5}
            borderRadius={6} 
            bgColor="white"
            _pressed={{ bgColor: 'rose.300' }}
          >
            <Text color="#f96163" textAlign="center">Login</Text>
          </Button>
        </Box>

        <Button onPress={handleSignUp} variant="link" mt="5">
          <Text color="danger.500" fontSize="md">
            Belum punya akun? Sign Up disini
          </Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
