// RecipeForm.js
import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, Input, Button } from 'native-base';

const RecipeForm = ({ onSave, onCancel, initialValues }) => {
  const [recipe, setRecipe] = useState(initialValues);

  const handleSave = () => {
    onSave(recipe);
    setRecipe(initialValues);
  };

  const handleCancel = () => {
    onCancel();
    setRecipe(initialValues);
  };

  return (
    <NativeBaseProvider>
      <Box>
        <Text fontSize={22} fontWeight="bold" mb={4}>
          {initialValues ? 'Update Recipe' : 'Add Recipe'}
        </Text>
        <Input
          placeholder="Recipe Name"
          mb={4}
          value={recipe.name}
          onChangeText={(text) => setRecipe({ ...recipe, name: text })}
        />
        {/* Add other input fields for ingredients, time, etc. */}
        <Button onPress={handleSave} mb={2} mr={2}>
          Save
        </Button>
        <Button onPress={handleCancel} mb={2}>
          Cancel
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default RecipeForm;
