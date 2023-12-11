import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const StarRating = ({ rating, onStarPress }) => {
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? "star" : "star-o"}
          size={20}
          color={i <= rating ? "#f39c12" : "#ccc"}
          style={{ marginHorizontal: 2 }}
          onPress={() => onStarPress(i)}
        />
      );
    }

    return stars;
  };

  return <>{renderStars()}</>;
};

export default StarRating;
