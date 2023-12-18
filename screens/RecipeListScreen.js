import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Box, NativeBaseProvider, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CategoriesFilter from "../components/CategoriesFilter";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import Icon from 'react-native-vector-icons/FontAwesome';

const RecipeListScreen = () => {
  const navigation = useNavigation();

  const handleSearchBarClick = () => {
    navigation.navigate("Search"); // Navigate to the new SearchScreen
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1} marginHorizontal={18}>
        {/* render header */}
        <Header headerText={"AYO MEMASAK "} headerIcon={"bell-o"} />

        {/* Search Filter */}
        <Box mb={300} mt={-500} p={1} bg="#f96163" borderRadius={10} flexDirection="row" alignItems="center">
          <TouchableOpacity onPress={handleSearchBarClick}>
            <Box flexDirection="row" alignItems="center">
              <Icon name="search" size={20} color="white" marginLeft={18} />
              <Text textAlign="center" fontSize="lg" color="white" marginLeft={8}>
                mau cari resep apa? klik disini
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* Categories filter */}
        <Box mt={-270}>
          <Text fontSize={22} fontWeight="bold">
            Categories
          </Text>
          {/* Categories list */}
          <CategoriesFilter />
        </Box>

        {/* Recipe List Filter */}
        <Box flex={1} mt={5}>
          <Text fontSize={22} fontWeight="bold">
            Recipes
          </Text>

          {/* Recipes list */}
          <RecipeCard />
        </Box>

        {/* Review Button */}
        {/* <Box mt={5}>
          <TouchableOpacity onPress={handleReviewButtonClick}>
            <Text fontSize="lg" fontWeight="bold" color="rose.500">
              Beri Ulasan
            </Text>
          </TouchableOpacity>
        </Box> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default RecipeListScreen;
