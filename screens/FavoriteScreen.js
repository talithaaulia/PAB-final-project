import React from "react";
import { NativeBaseProvider, HStack, Text, Box, ScrollView, Pressable, Image } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FavoriteScreen = ({ }) => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box marginTop={50} px={10}>
        <HStack justifyContent="space-between" alignItems="center" mb={4}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome name={"arrow-circle-left"} size={28} color="" />
          </Pressable>
        </HStack>

        <Text textAlign="center" fontWeight="bold" fontSize={20} mb={4}>
          Favorite
        </Text>

        <ScrollView mb={100}>

		{/* LASAGNA  */}
			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				bgColor="#fff"
				borderRadius={8}
				shadowColor="#000"
				shadowOpacity={0.2}
				shadowOffset={{ width: 0, height: 2 }}
				shadowRadius={4}
				p={4}
				mb={2}
			>
				<Image
					source={require("../assets/images/lasgana.png")} alt="lasagna"
					w={70} h={70} borderRadius={35} mr={2}
				/>
				<Box flex={1} mr={8}>
						<Text fontSize={18} fontWeight="bold" ml={2}>
							Lazagna
						</Text>
						<HStack mt={2} ml={2}>
							<Text>40 Menit</Text>
							<Text mx={1}> | </Text>
							<HStack>
								<Text mr={4}>4.2</Text>
								<FontAwesome
									name="star"
									size={16}
									color="#f96163"
								/>
							</HStack>
						</HStack>
				</Box>
				 <Box flexDirection="row" alignItems="center"></Box>
			</Box>

		{/* TUNA */}
			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				bgColor="#fff"
				borderRadius={8}
				shadowColor="#000"
				shadowOpacity={0.2}
				shadowOffset={{ width: 0, height: 2 }}
				shadowRadius={4}
				p={4}
				mb={2}
				mt={2}
			>
				<Image
					source={require("../assets/images/tuna.png")}  alt="tuna"
					w={70} h={70} borderRadius={35} mr={2}
				/>
				<Box flex={1} mr={8}>
						<Text fontSize={18} fontWeight="bold" ml={2}>
							Tuna
						</Text>
						<HStack mt={2} ml={2}>
							<Text>40 Menit</Text>
							<Text mx={1}> | </Text>
							<HStack>
								<Text mr={4}>4.2</Text>
								<FontAwesome
									name="star"
									size={16}
									color="#f96163"
								/>
							</HStack>
						</HStack>
				</Box>
				 <Box flexDirection="row" alignItems="center"></Box>
			</Box>

		{/* CUPCAKE */}
			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				bgColor="#fff"
				borderRadius={8}
				shadowColor="#000"
				shadowOpacity={0.2}
				shadowOffset={{ width: 0, height: 2 }}
				shadowRadius={4}
				p={4}
				mb={2}
				mt={2}
			>
				<Image
					source={require("../assets/images/cupcakes.png")} alt="cupcake"
					w={70} h={70} borderRadius={35} mr={2}
				/>
				<Box flex={1} mr={8}>
						<Text fontSize={18} fontWeight="bold" ml={2}>
							Cupcake
						</Text>
						<HStack mt={2} ml={2}>
							<Text>60 Menit</Text>
							<Text mx={1}> | </Text>
							<HStack>
								<Text mr={4}>5</Text>
								<FontAwesome
									name="star"
									size={16}
									color="#f96163"
								/>
							</HStack>
						</HStack>
				</Box>
				 <Box flexDirection="row" alignItems="center"></Box>
			</Box>

		{/* AYAM GEPREK */}
			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				bgColor="#fff"
				borderRadius={8}
				shadowColor="#000"
				shadowOpacity={0.2}
				shadowOffset={{ width: 0, height: 2 }}
				shadowRadius={4}
				p={4}
				mb={2}
				mt={2}
			>
				<Image
					source={require("../assets/images/chicken.png")} alt="ayam geprek"
					w={70} h={70} borderRadius={35} mr={2}
				/>
				<Box flex={1} mr={8}>
						<Text fontSize={18} fontWeight="bold" ml={2}>
							Ayam Geprek
						</Text>
						<HStack mt={2} ml={2}>
							<Text>45 Menit</Text>
							<Text mx={1}> | </Text>
							<HStack>
								<Text mr={4}>4.2</Text>
								<FontAwesome
									name="star"
									size={16}
									color="#f96163"
								/>
							</HStack>
						</HStack>
				</Box>
				 <Box flexDirection="row" alignItems="center"></Box>
			</Box>

		{/* RAMEN */}
			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				bgColor="#fff"
				borderRadius={8}
				shadowColor="#000"
				shadowOpacity={0.2}
				shadowOffset={{ width: 0, height: 2 }}
				shadowRadius={4}
				p={4}
				mb={2}
				mt={2}
			>
				<Image
					source={require("../assets/images/ramen-org.png")} alt="ramen"
					w={70} h={70} borderRadius={35} mr={2}
				/>
				<Box flex={1} mr={8}>
						<Text fontSize={18} fontWeight="bold" ml={2}>
							Ramen
						</Text>
						<HStack mt={2} ml={2}>
							<Text>35 Menit</Text>
							<Text mx={1}> | </Text>
							<HStack>
								<Text mr={4}>4.2</Text>
								<FontAwesome
									name="star"
									size={16}
									color="#f96163"
								/>
							</HStack>
						</HStack>
				</Box>
				 <Box flexDirection="row" alignItems="center"></Box>
			</Box>

		{/* HOTDOG */}
			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				bgColor="#fff"
				borderRadius={8}
				shadowColor="#000"
				shadowOpacity={0.2}
				shadowOffset={{ width: 0, height: 2 }}
				shadowRadius={4}
				p={4}
				mb={2}
				mt={2}
			>
				<Image
					source={require("../assets/images/hotdog.png")} alt="Hotdog"
					w={70} h={70} borderRadius={35} mr={2}
				/>
				<Box flex={1} mr={8}>
						<Text fontSize={18} fontWeight="bold" ml={2}>
							Hotdog
						</Text>
						<HStack mt={2} ml={2}>
							<Text>40 Menit</Text>
							<Text mx={1}> | </Text>
							<HStack>
								<Text mr={4}>4.6</Text>
								<FontAwesome
									name="star"
									size={16}
									color="#f96163"
								/>
							</HStack>
						</HStack>
				</Box>
				 <Box flexDirection="row" alignItems="center"></Box>
			</Box>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

export default FavoriteScreen;
