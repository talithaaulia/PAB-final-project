import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Box, Text } from "native-base";
import { useNavigation } from '@react-navigation/native';

const CategoriesFilter = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: '01',
      category: 'food',
    },
    {
      id: '02',
      category: 'drink',
    },
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);

    if (category === 'food') {
      // Navigate to the RecipeListScreen
      navigation.navigate('RecipeList'); // Replace 'RecipeList' with the actual screen name for recipes
    } else if (category === 'drink') {
      // Navigate to the Beverage screen
      navigation.navigate('Beverage'); // Replace 'Beverage' with the actual screen name
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleCategoryPress(item.category)}
    >
      <Box
        p={4}
        my={5}
        mr={5}
        bg={selectedCategory === item.category ? '#f96163' : '#fff'}
        borderRadius={10}
      >
        <Text fontSize="lg" color={selectedCategory === item.category ? '#fff' : '#000'}>
          {item.category}
        </Text>
      </Box>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoriesFilter;
