import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Text, 
  VStack, HStack, Pressable, Icon, 
  Divider, Input, Button, IconButton 
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'reviews';

const ReviewListScreen = ({navigation}) => {
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({ text: '', rating: 0 });

  // Load reviews from AsyncStorage on component mount
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const storedReviews = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    };

    loadReviews();
  }, []);

  // Save reviews to AsyncStorage whenever it changes
  useEffect(() => {
    const saveReviews = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
      } catch (error) {
        console.error('Error saving reviews:', error);
      }
    };

    saveReviews();
  }, [reviews]);

  const handleAddReview = () => {
    if (newReview.text.trim() && newReview.rating > 0 && newReview.rating <= 5) {
      const today = new Date();
      const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      setReviews((prevReviews) => [
        ...prevReviews,
        { id: prevReviews.length + 1, ...newReview, createdAt: formattedDate },
      ]);

      // Clear the form after adding the review
      setNewReview({ text: '', rating: 0 });
    }
  };

  const handleDeleteReview = (reviewId) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="#f96163" padding={20}>
        <Box position="absolute" top={20} left={20} zIndex={1}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="white" right={12} bottom={5}/>
          </Pressable>
        </Box>

        <Box p={4} bg="white" borderRadius={8} shadow={2}>
          <Text fontSize={20} fontWeight="bold" mb={2} color="black">
            Review List
          </Text>

          {/* Form to add a new review */}
          <VStack space={4} mb={2}>
            <Input
              borderColor="rose.400"
              placeholder="Your Review" placeholderTextColor="rose.300"
              value={newReview.text}
              onChangeText={(text) => setNewReview({ ...newReview, text })}
            />
            <Input
              borderColor="rose.400"
              placeholder="Rating (1-5)" placeholderTextColor="rose.300"
              keyboardType="numeric"
              value={newReview.rating.toString()}
              onChangeText={(rating) => setNewReview({ ...newReview, rating: parseInt(rating) || 0 })}
            />
            <Button size="sm" bgColor="rose.500" onPress={handleAddReview}>
              Add Review
            </Button>
          </VStack>

          {/* Display existing reviews in the list */}
          {reviews.map((review) => (
            <VStack key={review.id} space={2} mb={2}>
              <HStack justifyContent="space-between" alignItems="center">
                <VStack>
                  <Text fontSize={16} fontWeight="bold">
                    {review.text}
                  </Text>
                  <Text fontSize={12} color="gray.500">
                    Created: {review.createdAt}
                  </Text>
                </VStack>
                <Text fontSize={14} top={4} color="gray.500">
                  Rating: {review.rating}/5
                </Text>
                <IconButton
                  icon={<FontAwesome name="trash" top={14} size={16} color="red" />}
                  onPress={() => handleDeleteReview(review.id)}
                />
              </HStack>
              <Divider />
            </VStack>
          ))}
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default ReviewListScreen;