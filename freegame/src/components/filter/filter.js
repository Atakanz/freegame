import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./filter.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { filterData } from "../../data/filter";
import FilterTitles from "../filterTitles/filterTitles";

const Filter = () => {
  const [selected, setSelected] = useState(0);
  const [subtitle, setSubtitle] = useState();
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const increaseSelected = () => {
    setSelected(selected < 2 ? selected + 1 : 2);
    setSubtitle("");
    setSubtitleIndex(0);
  };
  const decreaseSelected = () => {
    setSelected(selected > 0 ? selected - 1 : 0);
    setSubtitle("");
    setSubtitleIndex(0);
  };
  const downSubtitle = () => {
    setSubtitleIndex(subtitleIndex === 0 ? 0 : subtitleIndex - 1);
    setSubtitle(filterData[selected].subTitles[subtitleIndex]);
  };
  const upSubtitle = () => {
    setSubtitleIndex(
      subtitleIndex === filterData[selected].length - 1
        ? filterData[selected].length - 1
        : subtitleIndex + 1
    );
    setSubtitle(filterData[selected].subTitles[subtitleIndex]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={filterData}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <FilterTitles
            name={item.name}
            id={item.id}
            selectedID={selected}
            option={subtitle}
          />
        )}
      />
      <View style={styles.filtersContainer}></View>
      <View style={styles.directionsContainer}>
        <FontAwesome.Button
          name="caret-up"
          color="orange"
          style={styles.directionButtons}
          backgroundColor="rgba(255, 255, 255, 0)"
          size={30}
          onPress={upSubtitle}
        />
        <View style={styles.leftRightContainer}>
          <FontAwesome.Button
            name="caret-left"
            color="orange"
            style={styles.directionButtons}
            backgroundColor="rgba(255, 255, 255, 0)"
            size={30}
            onPress={decreaseSelected}
          />
          <FontAwesome.Button
            name="caret-right"
            color="orange"
            style={styles.directionButtons}
            backgroundColor="rgba(255, 255, 255, 0)"
            size={30}
            onPress={increaseSelected}
          />
        </View>
        <FontAwesome.Button
          name="caret-down"
          color="orange"
          style={styles.directionButtons}
          backgroundColor="rgba(255, 255, 255, 0)"
          size={30}
          onPress={downSubtitle}
        />
      </View>
    </View>
  );
};

export default Filter;
