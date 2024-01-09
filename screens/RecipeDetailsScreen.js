import React from "react";
import { NativeBaseProvider, Box, ScrollView, HStack, Icon, Text, Image,Pressable } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import RecipeDetailsInfo from "./info";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <NativeBaseProvider>
      <Box bg={item.color} flex={1}>
  <HStack flexDirection="row" mt={10} marginX={6}>
    <Pressable onPress={() => navigation.goBack()}>
      <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="black" />
    </Pressable>
  </HStack>

        <Box bg="#fff" flex={1} mt={140} borderTopLeftRadius={56} borderTopRightRadius={56} alignItems="center" paddingX={6}>
          <Box h="300" w="300" position="absolute" top="-150">
            <Image source={{ uri: item.recipe?.image }} w="100%" h="100%" resizeMode="contain" />
          </Box>

          <Text mt={150} fontSize={28} fontWeight="bold">
            {item.recipe?.label}
          </Text>

          <Box flex={1}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text fontSize={20} my={4}>
                {item.recipe?.summary}
              </Text>

              {/* Informasi Resep */}
              <RecipeDetailsInfo item={item.recipe} />

              {/* Recipe Ingredients */}
              {item.recipe?.ingredientLines && item.recipe.ingredientLines.length > 0 && (
                <Box alignSelf="flex-start" my={12}>
                  <Text fontSize="lg" fontWeight="600" mb={3}>
                    Ingredients:
                  </Text>
                  {item.recipe.ingredientLines.map((ingredient, index) => (
                    <Text fontSize={18} key={index}>
                      {ingredient}
                    </Text>
                  ))}
                </Box>
              )}

              {/* Recipe Steps (Ingredients Text Only) */}
              {item.recipe?.ingredientstextOnly && item.recipe.ingredientstextOnly.length > 0 && (
                <Box my={2} alignSelf="flex-start">
                  <Text fontSize="lg" fontWeight="600" mb={4}>
                    Steps:
                  </Text>
                  {item.recipe.ingredientstextOnly.map((step, index) => (
                    <Text fontSize="lg" ml={2} my={1} key={index}>
                      {`${index + 1}) ${step}`}
                    </Text>
                  ))}
                </Box>
              )}
            </ScrollView>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default RecipeDetailsScreen;
