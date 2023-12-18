import { 
  NativeBaseProvider, Box, Pressable, 
  Icon, Text, VStack, 
  Link, HStack, Image 
} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

const AboutUsScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" bg="rose.300">
      <HStack flexDirection="row" marginX={6}>
            <Pressable           
              position="absolute"
              bottom={30}
              right={150}
              onPress={() => navigation.goBack()}
            >
              <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="rose.600" />
            </Pressable>
        </HStack>
        <VStack space={4} alignItems="center">
          <Box mb={100}>
            <Text color="white" size="4xl" fontWeight="bold" underline={true} textAlign="center" bg="rose.500" m={6}  p={2}>
              ABOUT US
            </Text>

            <Text fontSize="sm" textAlign="justify" mx={6} mb={8}>
              Sebuah aplikasi yang berisi informasi resep masakan, mulai dari bahan yang diperlukan, cara pembuatan,
              estimasi waktu yang dibutuhkan, hingga kandungan kalori dari masakan.
              Aplikasi ini juga menyediakan fitur untuk mencatat list kebutuhan belanja.
            </Text>
          </Box>

          <Image source={require('../assets/images/chef.png')} alt="Facebook" size={200} bottom={20} mb={100} />

          <Text color="danger.700" fontSize="sm" fontWeight="bold" textAlign="center"> To Get In Touch With Us : </Text>

          <HStack space={4}>
            <Link href="https://www.facebook.com/ittelkomsurabaya/">
              <Image source={require('../assets/images/facebook.png')} alt="Facebook" size={8} />
            </Link>

            <Link href="https://www.instagram.com/ittelkomsurabaya/" >
              <Image source={require('../assets/images/instagram.png')} alt="Instagram" size={8} />
            </Link>

            <Link href="mailto:info@resep.com" >
              <Image source={require('../assets/images/email.png')} alt="Email" size={8} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default AboutUsScreen;
