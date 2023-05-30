import { View, Text } from "react-native";
import React from "react";
import styles from "./filterTitles.style";

const FilterTitles = ({ name, id, selectedID, option }) => {
  return (
    <View
      style={[
        styles.filterButtons,
        { borderColor: selectedID == id ? "rgba(53, 141, 230, 1)" : "white" },
      ]}
    >
      <Text style={styles.filterText}>
        {selectedID == id && option ? option : name}
      </Text>
    </View>
  );
};

export default FilterTitles;
