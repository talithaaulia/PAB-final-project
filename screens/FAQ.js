import React from "react";
import { 
  NativeBaseProvider, Box, HStack, 
  Pressable, Icon, Text 
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const FAQ = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center">
        <HStack flexDirection="row" marginX={6}>
            <Pressable flex={1} onPress={() => navigation.goBack()}>
              <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="rose.500" />
            </Pressable>
        </HStack>
        <Text fontSize={30} mb={10} color="white" bg="#ec685f" p={2}>
          FAQ
        </Text>
        <Text fontSize={18} mb={5} color="#ec685f">
          Apakah aplikasi juga tersedia versi website?
        </Text>
        <Text fontSize={18} color="#ec685f">
          Bagaimana cara menghubungi admin?
        </Text>
        {/* Tambahkan konten FAQ sesuai kebutuhan */}
      </Box>
    </NativeBaseProvider>
  );
};

export default FAQ;
