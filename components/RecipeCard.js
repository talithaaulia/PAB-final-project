import React, { useState, useEffect } from "react";
import { FlatList, Pressable } from "react-native";
import { Box, Text, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../screens/StarRating";

const RecipeCard = ({ recipes }) => {
  const navigation = useNavigation();
  const [recipeListState, setRecipeListState] = useState([]);

  const handleStarPress = (recipeId, newRating) => {
    const updatedRecipeList = updateRecipeRating(recipeId, newRating);
    setRecipeListState(updatedRecipeList);
  };

  const updateRecipeRating = (recipeId, newRating) => {
    return recipeListState.map((recipe) => {
      if (recipe.id === recipeId) {
        return { ...recipe, rating: newRating };
      }
      return recipe;
    });
  };

  useEffect(() => {
    console.log("lala");
    console.log(recipes);
    setRecipeListState(recipes); // Inisialisasi state dengan data resep
  }, [recipes]);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("RecipeDetail", { item: item })}
      style={{
        backgroundColor: "#f4f4f4",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,
      }}
    >
      <Image
        source={{ uri: item.recipe.image }}
        style={{ width: 150, height: 150, resizeMode: "cover" }}
      />
      <Text>{item.recipe.label}</Text>
      <Box flexDirection="row" marginTop={8}>
        <StarRating
          rating={item.recipe.yield}
          onStarPress={(newRating) => handleStarPress(item.id, newRating)}
        />
      </Box>
      <Text>{/* Tampilkan ulasan di sini */}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={recipeListState}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RecipeCard;
