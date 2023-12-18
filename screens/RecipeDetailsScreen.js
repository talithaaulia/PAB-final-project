import React, { useState } from "react";
import { Animated } from "react-native";
import { NativeBaseProvider, Box, 
        ScrollView, HStack, Icon, 
        Text, Image, Pressable 
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import RecipeDetailsInfo from "./info";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [isHeartRed, setIsHeartRed] = useState(false);
  const [animation] = useState(new Animated.Value(1));

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
      <Box bg={item.color} flex={1}>
        <HStack flexDirection="row" mt={10} marginX={6}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} 
                  name="arrow-circle-left" 
                  size="28" 
                  color="white" 
            />
          </Pressable>
          <Pressable onPress={toggleHeartColor}>
            <Animated.View style={[animatedStyle]}>
              <Icon as={FontAwesome} 
                name={isHeartRed ? "heart" : "heart-o"} 
                size="28" 
                color={isHeartRed ? "black" : "white"} />
            </Animated.View>
          </Pressable>
        </HStack>

        <Box bg="#fff" 
          flex={1} 
          mt={140} 
          borderTopLeftRadius={56} 
          borderTopRightRadius={56} 
          alignItems="center" 
          paddingX={6}>
          <Box h="300" w="300" position="absolute" top="-150">
            <Image source={item.image} 
              w="100%" 
              h="100%" 
              resizeMode="contain" 
            />
          </Box>

          <Text mt={150} fontSize={28} fontWeight="bold">
            {item.name}
          </Text>

          <Box flex={1}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text fontSize={20} my={4}>
                {item.description}
              </Text>

              <RecipeDetailsInfo item={item} />


              {/* Recipe Ingredients  */}
              <Box alignSelf="flex-start" my={12}>
                <Text fontSize="lg" fontWeight="600" mb={3}>
                  Ingredients:
                </Text>

                {item.ingredients.map((ingredient, index) => (
                  <Text fontSize={18} key={index}>
                    {ingredient}
                  </Text>
                ))}
              </Box>


              {/* Recipe Steps */}
              <Box my={2} alignSelf="flex-start">
                <Text fontSize="lg" fontWeight="600" mb={4}>
                  Steps:
                </Text>

                {item.steps.map((step, index) => (
                  <Text fontSize="lg" ml={2} my={1} key={index}>
                    {`${index + 1}) ${step}`}
                  </Text>
                ))}
              </Box>
            </ScrollView>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default RecipeDetailsScreen;
