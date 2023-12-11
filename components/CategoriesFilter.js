import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from "native-base";
import { useNavigation } from '@react-navigation/native';

const CategoriesFilter = () => {
  const navigation = useNavigation();

  const categories = [
    {
      id: '01',
      category: 'makanan',
    },
    {
      id: '02',
      category: 'minuman',
    },
  ];

  const handleCategoryPress = (category) => {
    if (category === 'minuman') {
      // Navigate to the Beverage screen
      navigation.navigate('Beverage'); // Replace 'Beverage' with the actual screen name
    } else {
      // Handle other categories or navigate to other screens accordingly
    }
  };

  return (
    <>
    <Box flexDirection="row">
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => handleCategoryPress(category.category)}
        ><Box
            p={4}
            my={5}
            mr={5}
            bg={category.id === '01' ? '#f96163' : '#fff'}
            borderRadius={10}
         >
            <Text fontSize="lg" 
              color={category.id === '01' ? '#fff' : '#000'}>
              {category.category}
            </Text>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
    </>
  );
};

export default CategoriesFilter;
