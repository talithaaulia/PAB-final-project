import React, { useState, useEffect, createContext, useContext } from 'react';
import { ScrollView } from 'react-native';
import { 
  NativeBaseProvider, Box, Text, 
  VStack, HStack, Divider, 
  Input, Button, IconButton,
  Pressable, Icon
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShoppingListContext = createContext();

const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error('useShoppingList must be used within a ShoppingListProvider');
  }
  return context;
};

const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const loadShoppingList = async () => {
      try {
        const storedShoppingList = await AsyncStorage.getItem('shoppingList');
        if (storedShoppingList) {
          setShoppingList(JSON.parse(storedShoppingList));
        }
      } catch (error) {
        console.error('Error loading shopping list:', error);
      }
    };

    loadShoppingList();
  }, []);

  useEffect(() => {
    const saveShoppingList = async () => {
      try {
        await AsyncStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      } catch (error) {
        console.error('Error saving shopping list:', error);
      }
    };

    saveShoppingList();
  }, [shoppingList]);

  const contextValue = {
    shoppingList,
    setShoppingList,
  };

  return (
    <ShoppingListContext.Provider value={contextValue}>
      {children}
    </ShoppingListContext.Provider>
  );
};

const ShoppingListItem = ({ id, item }) => {
  const { setShoppingList } = useShoppingList();

  const handleDeleteItem = () => {
    setShoppingList((prevList) => prevList.filter((listItem) => listItem.id !== id));
  };

  return (
    <VStack
      key={id}
      space={2}
      mb={4}
      bg="white"
      borderRadius={8}
      p={4}
      shadow={2}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize={18} fontWeight="bold" color="gray.800">
          {item}
        </Text>
        <IconButton
          icon={<FontAwesome name="trash" size={20} color="red" />}
          onPress={handleDeleteItem}
        />
      </HStack>
      <Divider mt={2} />
    </VStack>
  );
};

const ShoppingListScreen = () => {
  const { shoppingList, setShoppingList } = useShoppingList();
  const [newItem, setNewItem] = useState("");
  const navigation = useNavigation();

  const handleAddItem = () => {
    if (newItem.trim()) {
      setShoppingList((prevList) => [
        ...prevList,
        { id: prevList.length + 1, item: newItem.trim() },
      ]);

      setNewItem('');
    }
  };

  return (
    <NativeBaseProvider>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 20,
        }}
      >
        <HStack flexDirection="row" marginX={6}>
          <Pressable           
            position="fixed"
            bottom={180}
            right={15}
            onPress={() => navigation.goBack()}
          >
            <Icon as={FontAwesome} name="arrow-circle-left" size="28" color="#f96163" />
          </Pressable>
        </HStack>
        <Box p={4} bg="#f96163" borderRadius={8} shadow={2}>
          <Text fontSize={24} fontWeight="bold" mb={4} color="white">
            Shopping List
          </Text>

          <VStack space={2} mb={4}>
            <Input
              placeholder="Add New Item"
              value={newItem}
              onChangeText={(text) => setNewItem(text)}
              variant="filled"
            />
            <Button onPress={handleAddItem} bgColor="rose.200">
              <Text color="black">Add Item</Text>
            </Button>
          </VStack>

          {shoppingList.map((item) => (
            <ShoppingListItem key={item.id} {...item} />
          ))}
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const App = () => {
  return (
    <ShoppingListProvider>
      <ShoppingListScreen />
    </ShoppingListProvider>
  );
};

export default App;