import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./gameCard.style";

const GameCard = ({ obj }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          source={{ uri: obj.thumbnail }}
          style={styles.image}
          alt="game-thumbnail"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{obj.title}</Text>
        <Text style={styles.qualifications}>
          <Text style={styles.props}>Platform: </Text>
          {obj.platform}
        </Text>
        <Text style={styles.qualifications}>
          <Text style={styles.props}>Genre: </Text>
          {obj.genre}
        </Text>
      </View>
    </View>
  );
};

export default GameCard;
