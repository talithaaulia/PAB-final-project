import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Box, NativeBaseProvider, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CategoriesFilter from "../components/CategoriesFilter";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import Icon from 'react-native-vector-icons/FontAwesome';

const RecipeListScreen = () => {
  // Menggunakan React Navigation untuk mendapatkan objek navigation
  const navigation = useNavigation();

  // State untuk menyimpan daftar resep
  const [recipes, setRecipes] = React.useState([]);

  // Fungsi yang akan dipanggil untuk menavigasi ke halaman pencarian
  const handleSearchBarClick = () => {
    navigation.navigate("Search"); // Navigasi ke halaman SearchScreen
  };

  // Menggunakan useEffect untuk memuat daftar resep dari API saat komponen pertama kali dimuat
  React.useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Mengambil data resep dari API menggunakan fetch
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=9631526f&app_key=d26b50691432dfec98de8de1a0f1eeb7');
        
        // Mengecek apakah respon dari API berhasil (status 200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Mengambil data dari respon dalam format JSON
        const data = await response.json();
        
        // Menyimpan data resep ke dalam state
        setRecipes(data.hits);
        console.log(data.hits);
      } catch (error) {
        // Menangani error jika terjadi kesalahan saat mengambil data resep
        console.error('Error fetching recipes:', error);
      }
    };

    // Memanggil fungsi fetchRecipes ketika komponen pertama kali dimuat
    fetchRecipes();
  }, []); // Dependensi kosong berarti hanya dijalankan sekali saat komponen dimuat

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1} marginHorizontal={0}>
        {/* Komponen Header yang menerima prop headerText */}
        <Header headerText={"AYO MEMASAK "} />
  
        {/* Search Filter */}
        <Box mb={300} mt={-350} p={1} bg="#f96163" borderRadius={10} flexDirection="row" alignItems="center">
          {/* Tombol pencarian yang akan menavigasi ke halaman Search saat diklik */}
          <TouchableOpacity onPress={handleSearchBarClick}>
            <Box flexDirection="row" alignItems="center">
              {/* Icon pencarian */}
              <Icon name="search" size={20} color="white" marginLeft={17} />
              {/* Text untuk memicu aksi pencarian */}
              <Text textAlign="center" fontSize="lg" color="white" marginLeft={6}>
                mau cari resep apa? klik disini
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
  
        {/* Categories filter */}
        <Box mt={-270}>
          <Text fontSize={22} fontWeight="bold" color="rose.400">
            Categories
          </Text>
          {/* Komponen CategoriesFilter untuk menampilkan kategori resep */}
          <CategoriesFilter />
        </Box>
  
        {/* Recipe List Filter */}
        <Box flex={1} mt={5}>
          <Text fontSize={22} fontWeight="bold" color="rose.400">
            Recipes
          </Text>
          {/* Komponen RecipeCard yang menerima prop recipes */}
          <RecipeCard recipes={recipes} />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default RecipeListScreen;
