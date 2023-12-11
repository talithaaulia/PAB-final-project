import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, FlatList, NativeBaseProvider, Text, HStack, Icon, Pressable } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import { recipeList } from "../Constant";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    const filtered = recipeList.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} mx={18}>
       <HStack flexDirection="row" mt={10}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="rose.500" />
          </Pressable>
      </HStack>
      <Header headerText={"AYO MEMASAK "} headerIcon={"bell-o"} />

        {/* Search Filter */}
        <Box>
            <SearchFilter 
            icon="search"
            placeholder={"mau masak apa hari ini? ketik disini..."}
            onSearch={handleSearch}
            />

            {/* Display filtered results */}
            <FlatList ml={50} 
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RecipeDetail', { item });
                }}
                >
                    <Text mr={5} my={2} color="rose.500">
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
            />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default SearchScreen;
