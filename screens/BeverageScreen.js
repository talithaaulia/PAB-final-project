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
  const [recipes, setRecipes] = React.useState([]);

  const handleSearchBarClick = () => {
    navigation.navigate("Search"); // Navigate to the new SearchScreen
  };

  const handleReviewButtonClick = () => {
    navigation.navigate("StarRating"); // Navigate to the StarRatingScreen
  };

  React.useEffect(()=>{
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=juice&app_id=9631526f&app_key=d26b50691432dfec98de8de1a0f1eeb7');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits)
        // setRecipes(response.data); 
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    // Call the fetchRecipes function
    fetchRecipes();
  },[])

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1} marginHorizontal={18}>
        {/* render header */}
        <Header headerText={"AYO MEMASAK "} headerIcon={"bell-o"} />

        {/* Search Filter */}
        <Box mb={300} mt={-350} p={1} bg="#f96163" borderRadius={10} flexDirection="row" alignItems="center">
          <TouchableOpacity onPress={handleSearchBarClick}>
            <Box flexDirection="row" alignItems="center">
              <Icon name="search" size={20} color="white" marginLeft={17} />
              <Text textAlign="center" fontSize="lg" color="white" marginLeft={6}>
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
          <RecipeCard recipes={recipes} />
        </Box>

      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default RecipeListScreen;