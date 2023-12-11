import React, { useState } from "react";
import { Animated, Image, Pressable } from "react-native";
import { NativeBaseProvider, Box, HStack, Icon, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const BeverageScreen = ({ navigation }) => {
  const [isHeartRed, setIsHeartRed] = useState(false);
  const [animation] = useState(new Animated.Value(1));

  const ingredients = [
    "cincau & dawet",
    "santan",
    "gula merah",
    "es batu",
  ];

  const steps = [
    "1) Rebus gula merah sampai larut lalu saring",
    "2) Kemudian rebus santan dengan ditambah sedikit air dan garam",
    "3) Terakhir tata dalam gelas, es batu, cincau hitam, dawet, tape, dan siram dengan gula serta santan. Sajikan"
  ];

  const toggleHeartColor = () => {
    setIsHeartRed(!isHeartRed);

    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(animation, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };


  return (
    <NativeBaseProvider>
      <Box bg="yellow.500" flex={1}>
        <HStack flexDirection="row" mt={10} marginX={6}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="white" />
          </Pressable>
          <Pressable onPress={toggleHeartColor}>
            <Animated.View style={[animatedStyle]}>
              <Icon as={FontAwesome} name={isHeartRed ? "heart" : "heart-o"} size="28" color={isHeartRed ? "black" : "white"} />
            </Animated.View>
          </Pressable>
        </HStack>

        <Box bg="#fff" flex={1} mt={140} borderTopLeftRadius={56} borderTopRightRadius={56} alignItems="center" paddingX={6}>
          <Box h="300" w="300" position="absolute" top="-150">
            <Image source={require('../assets/images/cendol.png')} alt="Cendol" 
              style={{ width: "100%", height: "100%", resizeMode: "contain" }} 
            />
          </Box>

          <Text mt={150} fontSize={28} fontWeight="bold">
            Es Cendol Dawet
          </Text>

          <Box flex={1}>
              <Box my={12} mr={250}>
                <Text fontSize="lg" fontWeight="600" mb={3}>
                  Ingredients:
                </Text>

                {ingredients.map((ingredient, index) => (
                  <Text fontSize={18} key={index}>
                    {ingredient}
                  </Text>
                ))}
              </Box>

              <Box my={2} alignSelf="flex-start">
                <Text fontSize="lg" fontWeight="600" mb={4}>
                  Steps:
                </Text>

                {steps.map((step, index) => (
                  <Text fontSize={18} key={index}>
                    {step}
                  </Text>
                ))}
              </Box>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default BeverageScreen;
