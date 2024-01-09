import React, { useState, useEffect } from "react";
import { FlatList, Pressable } from "react-native";
import { Box, Text, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({ recipes }) => {
  const navigation = useNavigation();

  // State untuk menyimpan daftar resep
  const [recipeListState, setRecipeListState] = useState([]);

  // Menggunakan useEffect untuk memperbarui state saat prop 'recipes' berubah
  useEffect(() => {
    console.log("lala");
    console.log(recipes);
    setRecipeListState(recipes); // Inisialisasi state dengan data resep
  }, [recipes]);

  // Fungsi untuk merender setiap item resep dalam daftar
  const renderItem = ({ item }) => (
    <Pressable
      // Navigasi ke layar RecipeDetail dan membawa data resep sebagai parameter
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
      {/* Gambar resep */}
      <Image
        source={{ uri: item.recipe.image }}
        style={{ width: 150, height: 150, resizeMode: "cover" }}
      />
      {/* Judul resep */}
      <Text>{item.recipe.label}</Text>
    </Pressable>
  );

  // Menggunakan FlatList untuk menampilkan daftar resep dalam grid dua kolom
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
