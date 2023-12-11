import React, { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Box, Text, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { colors, recipeList } from "../Constant";
import StarRating from "../screens/StarRating";

const RecipeCard = () => {
  const navigation = useNavigation();
  const [recipeListState, setRecipeListState] = useState(recipeList);

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

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("RecipeDetail", { item: item })}
      style={{
        backgroundColor: colors.COLOR_LIGHT,
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
        source={item.image}
        alt={item.name}
        style={{ width: 150, height: 150, resizeMode: "center" }}
      />
      <Text>{item.name}</Text>
      <Box flexDirection="row" marginTop={8}>
        <Text>{item.time}</Text>
        <Text> | </Text>
        <StarRating rating={item.rating} onStarPress={(newRating) => handleStarPress(item.id, newRating)} />
      </Box>
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
