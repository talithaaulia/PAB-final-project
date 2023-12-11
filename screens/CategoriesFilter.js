import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => handleCategoryPress(category.category)}
          style={{
            padding: 10,
            margin: 5,
            backgroundColor: category.id === '01' ? '#f96163' : '#fff',
            borderRadius: 5,
          }}
        >
          <Text>{category.category}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default CategoriesFilter;
