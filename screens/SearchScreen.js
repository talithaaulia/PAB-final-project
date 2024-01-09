import React, { useState } from "react";
import { Box, FlatList, NativeBaseProvider, Text, HStack, Icon, Pressable } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${`9631526f`}&app_key=${`d26b50691432dfec98de8de1a0f1eeb7`}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Dapatkan resep dari data API
      const recipes = data.hits.map((hit) => ({
        id: hit.recipe.uri,
        name: hit.recipe.label,
        recipe: hit.recipe, 
      }));

      setFilteredData(recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} mx={18}>
       <HStack flexDirection="row" mt={10}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="rose.500" top={5}/>
          </Pressable>
      </HStack>
      <Header headerText={"AYO MEMASAK"} headerIcon={"bell-o"}/>

        {/* Search Filter */}
        <Box mb={660}>
            <SearchFilter 
              position="fixed"
              icon="search"
              placeholder={"mau masak apa hari ini? ketik disini..."}
              onSearch={handleSearch}
            />

            {/* Display filtered results */}
            <FlatList ml={50} 
              data={filteredData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    navigation.navigate("RecipeDetail", { item });
                  }}
                >
                    <Text mr={5} my={2} color="rose.500">
                        {item.name}
                    </Text>
                </Pressable>
              )}
            />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default SearchScreen;
