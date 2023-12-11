import { Box, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerText, headerIcon }) => {
	const navigation = useNavigation();

	return (
		<Box flexDirection="row" mt={10}>
			<Text flex={1} fontSize="lg" fontWeight={700}>
				{headerText}
			</Text>

			<FontAwesome name={headerIcon} size={24} mr={30} color="#f96163" onPress={() => navigation.navigate("Favorite")}/>
			<Text ml={5} mt={1} onPress={()=>navigation.navigate("profile")}>Profile</Text>
		</Box>
	);
};

export default Header;

