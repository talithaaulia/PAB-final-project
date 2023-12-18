import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StarRating = ({ rating, onStarPress }) => {
  const navigation = useNavigation();

  const handleStarPress = () => {
    // Navigasi ke screen review saat ikon bintang ditekan
    navigation.navigate('ReviewScreen');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleStarPress}>
        <FontAwesome name="star" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

export default StarRating;