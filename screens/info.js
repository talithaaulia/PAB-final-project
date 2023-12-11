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
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
                      Time
                    </Text>
                    <Text fontSize="lg" textAlign="center">{item.time} minutes</Text>
                  </Box>
                )
              }
              android_ripple={{ color: "rgba(255, 0, 0, 0.5)" }}
            >
              <Box
                backgroundColor="rgba(255, 0, 0, 0.38)"
                py={5}
                borderRadius="2xl"
                alignItems="center"
                w="100"
              >
                <Text fontSize="4xl">⏰</Text>
                <Text fontSize="lg" fontWeight={200}>
                  {item.time}
                </Text>
              </Box>
            </Pressable>

            <Pressable
              onPress={() =>
                toggleModal(
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
                      Difficulty
                    </Text>
                    <Text fontSize="lg" textAlign="center">{item.difficulty}</Text>
                  </Box>
                )
              }
              android_ripple={{ color: "rgba(135, 206, 235, 0.5)" }}
            >
              <Box
                bg="rgba(135, 206, 235, 0.8)"
                py={5}
                borderRadius="2xl"
                alignItems="center"
                w="100"
              >
                <Text fontSize="4xl">🥣</Text>
                <Text fontSize="lg" fontWeight={200}>
                  {item.difficulty}
                </Text>
              </Box>
            </Pressable>

            <Pressable
              onPress={() =>
                toggleModal(
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
                      Calories
                    </Text>
                    <Text fontSize="lg" textAlign="center">{item.calories}</Text>
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
