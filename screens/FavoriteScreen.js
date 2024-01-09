import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Pressable } from "react-native";
import { Box, NativeBaseProvider, Text, Icon } from "native-base";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const TrendingRecipesScreen = () => {
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTrendingRecipes = async () => {
      try {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=croissant&app_id=9631526f&app_key=d26b50691432dfec98de8de1a0f1eeb7');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTrendingRecipes(data.hits);
      } catch (error) {
        console.error('Error fetching trending recipes:', error);
      }
    };

    fetchTrendingRecipes();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1} marginHorizontal={18}>
        {/* Trending Recipe List Filter */}
        <Box flex={1} mt={20}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Box>
              <Text fontSize={22} fontWeight="bold">

                Resep yang Trending
              </Text>
              {/* Trending Recipes list */}
              <RecipeCard recipes={trendingRecipes} />
            </Box>
          </ScrollView>
        </Box>

        <Box flex={1} position="absolute" top={10} left={100} bgColor="white">
          <Pressable onPress={handleBack}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="#f96163" />
          </Pressable>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default TrendingRecipesScreen;
