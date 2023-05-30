import { View, Text } from "react-native";
import React from "react";
import styles from "./filterTitles.style";

const FilterTitles = ({ name, id, selectedID, option }) => {
  const separator = "-";
  const hasSeparatorName = name.includes(separator);
  const hasSeparatorOption = option?.includes(separator);

  let processedName = name;
  let processedOption = option;

  if (hasSeparatorName) {
    processedName = name.replace(separator, " ");
  }
  if (hasSeparatorOption) {
    processedOption = option?.replace(separator, " ");
  }
  return (
    <View
      style={[
        styles.filterButtons,
        { borderColor: selectedID == id ? "rgba(53, 141, 230, 1)" : "white" },
      ]}
    >
      <Text
        style={
          selectedID == id && option ? styles.optionText : styles.filterText
        }
      >
        {selectedID == id && option ? processedOption : processedName}
      </Text>
    </View>
  );
};

export default FilterTitles;
