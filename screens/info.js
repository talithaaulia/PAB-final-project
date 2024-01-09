import React, { useState } from "react";
import { NativeBaseProvider, Box, Text, Pressable, Modal } from "native-base";

const RecipeDetailsInfo = ({ item }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (content) => {
    setModalContent(content);
    setModalVisible(!isModalVisible);
  };

  return (
    <NativeBaseProvider>
      <Box flexDirection="row" justifyContent="space-between">
        {item && (
          <>
            <Pressable
              onPress={() =>
                toggleModal(
                  <Box p={4} bg="white" borderRadius="xl">
                    <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
                      Calories
                    </Text>
                    <Text fontSize="lg" textAlign="center">{item.calories} kcal</Text>
                  </Box>
                )
              }
              android_ripple={{ color: "rgba(255, 165, 0, 0.5)" }}
            >
              <Box
                bg="rgba(255, 165, 0, 0.48)"
                py={5}
                borderRadius="2xl"
                alignItems="center"
                w="100"
              >
                <Text fontSize="4xl" textAlign="center">🔥</Text>
                <Text fontSize="lg" fontWeight={200} textAlign="center">
                  {item.calories}
                </Text>
              </Box>
            </Pressable>
          </>
        )}

        {/* Modal */}
        <Modal isOpen={isModalVisible} onClose={toggleModal}>
          <Modal.Content>{modalContent}</Modal.Content>
        </Modal>
      </Box>
    </NativeBaseProvider>
  );
};

export default RecipeDetailsInfo;
