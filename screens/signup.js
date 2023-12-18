import React, { useState } from 'react';
import { 
  NativeBaseProvider, HStack, Pressable, 
  Icon, Box, Text, Button, Input, Modal, 
  Alert, AlertText, VStack, Radio
} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";
import FIREBASE from '../config';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  // const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  // const [errorModalMessage, setErrorModalMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await FIREBASE.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await FIREBASE.firestore().collection("users").doc(user.uid).set({
        fullName,
        email,
        gender,
      });

      console.log("User registered successfully!", user);
      navigation.navigate('login');
    } catch (error) {
      console.error("Sign up failed.", error.message);
      showErrorModal(error.message);
      // Handle sign-up error (show an error message, etc.)
    }
  };

  // const showErrorModal = (message) => {
  //   setErrorModalMessage(message);
  //   setIsErrorModalVisible(true);
  // };

  // const closeErrorModal = () => {
  //   setIsErrorModalVisible(false);
  // };

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" bgColor="white">
        <HStack flexDirection="row" marginX={6}>
            <Pressable           
              position="absolute"
              bottom={100}
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
            <Text fontSize={24} fontWeight="bold" mb={8} textAlign="center" color="white"> 
              ^^ SIGN UP ^^
            </Text>
            <Input
              h={12} w="90%" mb={8}
              borderWidth={3} borderColor="white"
              placeholder="Full Name" placeholderTextColor="white"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            <Input
              h={12} w="90%" mb={8}
              borderWidth={3} borderColor="white"
              placeholder="Email" placeholderTextColor="white"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              h={12} w="90%" mb={8}
              borderWidth={3} borderColor="white"
              placeholder="Password" placeholderTextColor="white"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <VStack space={2} alignItems="center" w="100%">
              <Text color="white" fontSize={18} mb={2}>Select Gender:</Text>
              <HStack space={4} alignItems="center">
                <Radio.Group name="gender" value={gender} onChange={(value) => setGender(value)}>
                  <HStack space={4} mb={2}>
                    <Radio value="male" colorScheme="white" borderColor="white" />
                    <Text color="white">Male</Text>
                  </HStack>
                  <HStack space={4}>
                    <Radio value="female" colorScheme="white" borderColor="white" />
                    <Text color="white">Female</Text>
                  </HStack>
                </Radio.Group>
              </HStack>
            </VStack>
            <Button onPress={handleSignUp} 
              m={5}
              borderRadius={6} 
              bgColor="white"
              _pressed={{ bgColor: 'rose.100' }}
            >
              <Text color="#f96163" textAlign="center">Sign Up</Text>
            </Button>
          </Box>
          
          {/* <Modal isOpen={isErrorModalVisible} onClose={closeErrorModal}>
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Error!</AlertText>
            <AlertText>{errorModalMessage}</AlertText>
          </Alert>
        </Modal> */}
      </Box>
    </NativeBaseProvider>
  );
};

export default SignUpScreen;
