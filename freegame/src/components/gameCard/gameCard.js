import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./gameCard.style";
import { Entypo } from "@expo/vector-icons";
import { calculateMonthsAgo } from "../../../utils/monthCalculator";
const GameCard = ({ obj }) => {
  const monthsAgo = calculateMonthsAgo(obj.release_date);
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
          <Text style={styles.props}>Genre: </Text>
          {obj.genre}
        </Text>
        <Text style={styles.qualifications}>
          <Text style={styles.props}>Platform: </Text>
          {obj.platform}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Entypo name="back-in-time" size={20} color="orange" />
        <Text style={[styles.qualifications, styles.monthText]}>
          {monthsAgo}
        </Text>
      </View>
    </View>
  );
};

export default GameCard;
