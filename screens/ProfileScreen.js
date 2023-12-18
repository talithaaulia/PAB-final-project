import React, { useEffect, useState } from 'react';
import { Image} from "react-native";
import { NativeBaseProvider, Box, Text, Pressable, Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FIREBASE from "../config";


const ProfileScreen = ({ }) => {
	const navigation = useNavigation();
    const [userData, setUserData] = useState(null);

    const handleLogout = () => {
        navigation.replace("Welcome");
    };

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const user = FIREBASE.auth().currentUser;
            console.log("User:", user);
    
            if (user) {
              const userDoc = await FIREBASE.firestore().collection("users").doc(user.uid).get();
              console.log("User Doc:", userDoc);
    
              if (userDoc.exists) {
                setUserData(userDoc.data());
              } else {
                console.error("User data not found.");
              }
            } else {
              console.error("User not authenticated.");
            }
          } catch (error) {
            console.error("Error fetching user data.", error.message);
          }
        };
    
        fetchUserData();
    }, []);
    
	return (
        <NativeBaseProvider>
            <Box flex={1} px={20}>
                <Box flexDirection="row" mt={60}>
                    <Pressable flex={1} onPress={() => navigation.goBack()}>
                        <FontAwesome name={"arrow-circle-left"} size={28} color="red" />
                    </Pressable>
                </Box>

                {userData && (
                <Box bg="white" borderWidth={1} borderRadius={10} p={5} alignItems="center" flexDirection="column" mt={20}>
                    <Image borderRadius={100} backgroundColor="white" padding={10} source={require("../assets/images/avatar.png")} />
                    <Text mt={5}>{userData.fullName}</Text>
                </Box>
                )}

                <Box mt={10} p={7} bg="#f96163" borderWidth={1} borderRadius={10} gap={3} flexDirection="column">
                    <Text color="white">Email : {userData.email}</Text>
                    <Text color="white">Gender : {userData.gender}</Text>
                </Box>
                
                <Button onPress={handleLogout} bg="#f96163">
                    Logout
                </Button>
            </Box>
        </NativeBaseProvider>
	);
};

export default ProfileScreen;

