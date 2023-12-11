import { SafeAreaView, TouchableOpacity } from "react-native";
import { Box, NativeBaseProvider, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CategoriesFilter from "../components/CategoriesFilter";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";


const RecipeListScreen = () => {
	const navigation = useNavigation();

	const handleSearchBarClick = () => {
		navigation.navigate('Search');  // Navigate to the new SearchScreen
	};

	return (
		<NativeBaseProvider>
			<SafeAreaView flex={1} marginHorizontal={18}>
				{/* render header */}
				<Header headerText={"AYO MEMASAK "} headerIcon={"bell-o"} />

			{/* Search Filter */}
			<Box mb={300} mt={5} bg="rose.500" borderRadius={50} >
				<TouchableOpacity onPress={handleSearchBarClick}>
					<Text 
						textAlign="center" 
						fontSize="lg" 
						color="white"
					>
						mau cari resep apa? klik disini
					</Text>
				</TouchableOpacity>
			</Box>

				{/* Categories filter */}
				<Box mt={-270}>
					<Text fontSize={22} fontWeight="bold">Categories</Text>
					{/* Categories list */}
					<CategoriesFilter />
				</Box>


				{/* Recipe List Filter */}
				<Box flex={1} mt={5}>
					<Text fontSize={22} fontWeight="bold">Recipes</Text>
					
					{/* Recipes list */}
					<RecipeCard />
				</Box>
			</SafeAreaView>
		</NativeBaseProvider>
	);
};

export default RecipeListScreen;

