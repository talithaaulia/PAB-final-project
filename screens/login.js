import React, { useState } from "react";
import { 
  NativeBaseProvider, HStack, 
  Pressable, Icon, Box, 
  Text, Button, Input 
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate("RecipeList");
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center">
      <HStack flexDirection="row" marginX={6}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="black" />
          </Pressable>
        </HStack>
        <Text fontSize={24} mb={8}>Login</Text>   
        <Input
          h={10} w="80%" mb={2}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <Input
          h={10} w="80%" mb={2}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Button onPress={handleLogin} w="80%">
          Login
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
