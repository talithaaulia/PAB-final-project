import { 
  NativeBaseProvider, Box, Pressable, 
  Icon, Text, VStack, 
  Link, HStack, Image 
} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

const AboutUsScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" bg="#fff">
      <HStack flexDirection="row" marginX={6}>
          <Pressable flex={1} onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="rose.500" />
          </Pressable>
      </HStack>
        <VStack space={4} alignItems="center">
          <Text color="danger.700" size="4xl" fontWeight="bold" underline={true} textAlign="center">
            About Us
          </Text>

          <Text fontSize="sm" textAlign="center" mx={6} mb={8}>
            Sebuah aplikasi yang berisi informasi resep masakan, mulai dari bahan yang diperlukan, cara pembuatan,
            estimasi waktu yang dibutuhkan, hingga kandungan kalori dari masakan.
          </Text>

          <Text color="danger.700" fontSize="sm" fontWeight="bold" textAlign="center"> To Get In Touch With Us : </Text>

          <HStack space={4}>
            <Link href="https://www.facebook.com/ittelkomsurabaya/">
              <Image source={require('../assets/images/facebook.jpg')} alt="Facebook" size={8} />
            </Link>

            <Link href="https://www.instagram.com/ittelkomsurabaya/" >
              <Image source={require('../assets/images/instagram.jpg')} alt="Instagram" size={8} />
            </Link>

            <Link href="mailto:info@resep.com" >
              <Image source={require('../assets/images/email.jpg')} alt="Email" size={8} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default AboutUsScreen;
