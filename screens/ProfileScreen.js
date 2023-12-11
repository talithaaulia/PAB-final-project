import { Image} from "react-native";
import { NativeBaseProvider, Box, Text, Pressable } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const ProfileScreen = ({ }) => {
	const navigation = useNavigation();
    
	return (
        <NativeBaseProvider>
            <Box flex={1} px={10}>
                <Box flexDirection="row" mt={60}>
                    <Pressable flex={1} onPress={() => navigation.goBack()}>
                        <FontAwesome name={"arrow-circle-left"} size={28} color="red" />
                    </Pressable>
                </Box>

                <Box bg="white" borderWidth={1} borderRadius={10} p={5} alignItems="center" flexDirection="column" mt={20}>
                    <Image style={{ borderRadius:100, backgroundColor:'white', padding: 10}} source={require("../assets/images/avatar.png")}></Image>
                    <Text>Joseph Joestar</Text>
                </Box>

                <Box mt={10} p={7} bg="#f96163" borderWidth={1} borderRadius={10}>
                <Text color="white" mb={8} fontSize={20} fontWeight="bold">Account Info</Text>
                    <Box gap={3} flexDirection="column">
                        <Box flexDirection="row" justifyContent="space-between">
                            <Text color="white">Nama : </Text>
                            <Text color="white">Aia Sofia</Text>    
                        </Box> 
                        <Box flexDirection="row" justifyContent="space-between">
                            <Text color="white">Username : </Text>
                            <Text color="white">aiaasofia</Text>    
                        </Box> 
                        <Box flexDirection="row" justifyContent="space-between">
                            <Text color="white">Gender : </Text>
                            <Text color="white">Perempuan</Text>    
                        </Box> 
                        <Box flexDirection="row" justifyContent="space-between">
                            <Text color="white">Age : </Text>
                            <Text color="white">17</Text>    
                        </Box> 
                        <Box flexDirection="row" justifyContent="space-between">
                            <Text color="white">Date of Birth : </Text>
                            <Text color="white">01 January 2030</Text>    
                        </Box> 
                        <Box flexDirection="row" justifyContent="space-between">
                            <Text color="white">Email : </Text>
                            <Text color="white">aiasofia@gmail.com</Text>    
                        </Box>            
                    </Box>
                </Box>
            </Box>
        </NativeBaseProvider>
	);
};

export default ProfileScreen;

