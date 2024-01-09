import { Box, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from 'native-base'; 
import { NativeBaseProvider } from 'native-base';

const Header = ({ headerText, headerIcon }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <NativeBaseProvider>
      <Box flexDirection="row" mt={10}>
        <Text flex={1} fontSize="lg" fontWeight={700}>
          {headerText}
        </Text>

        <FontAwesome
          name= "fire"
          size={24}
          color="#f96163"
          mr={30}
          onPress={() => navigation.navigate("Favorite")}
        />
        <Text ml={5} mt={1} onPress={() => navigation.navigate('Profile')}>
        <FontAwesome
            name="user-circle"
            size={24}
            color="#f96163"
          />
    </Text>
        <Text ml={10} mt={1} onPress={() => navigation.navigate('News')}>
          <FontAwesome
            name="newspaper-o"
            size={24}
            color="#f96163"
          />
        </Text>

        <Text ml={10} mt={1} onPress={() => navigation.navigate('list')}>
          <FontAwesome
            name="file-text-o" // Paper icon
            size={24}
            color="#f96163"
          />
        </Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default Header;