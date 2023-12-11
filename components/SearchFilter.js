import { Icon, Input, Box, Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SearchFilter = ({ icon, placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <Box
      bg="#fff"
      flexDirection="row"
      py={2}
      borderRadius={12}
      px={4}
      my={4}
      shadow={1}
    >
      <Icon as={FontAwesome} name={icon} size={8} color="#f96163" />
      <Input
        flex={1}
        fontSize={15}
        color="#808080"
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      {searchQuery !== '' && (
        <Button onPress={handleClear} variant="unstyled">
          <Icon as={FontAwesome} name="times" color="#808080" />
        </Button>
      )}
    </Box>
  );
};

export default SearchFilter;
