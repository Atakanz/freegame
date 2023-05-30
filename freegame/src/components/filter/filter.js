import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./filter.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ant from "@expo/vector-icons/AntDesign";
import { filterData } from "../../data/filter";
import FilterTitles from "../filterTitles/filterTitles";
import {
  rightArrow,
  leftArrow,
  downSubtitle,
  upSubtitle,
  selectFilterOption,
  getFilteredGames,
} from "../../../utils/filterConsole";

const Filter = ({ setFilter }) => {
  const [selected, setSelected] = useState(0);
  const [filterOptions, setFilterOptions] = useState("");
  const [subtitle, setSubtitle] = useState();
  const [subtitleIndex, setSubtitleIndex] = useState(-1);

  useEffect(() => {
    if (subtitleIndex === -1) {
      setSubtitle("");
    } else if (subtitleIndex !== 0) {
      setSubtitle(filterData[selected].subTitles[subtitleIndex]);
    }
  }, [subtitleIndex, selected]);

  const handleRightArrow = () => {
    rightArrow(setSelected, setSubtitleIndex, setSubtitle);
  };

  const handleLeftArrow = () => {
    leftArrow(setSelected, setSubtitleIndex, setSubtitle);
  };

  const handleDownSubtitle = () => {
    downSubtitle(
      subtitleIndex,
      filterData,
      selected,
      setSubtitleIndex,
      setSubtitle
    );
  };

  const handleUpSubtitle = () => {
    upSubtitle(
      subtitleIndex,
      filterData,
      selected,
      setSubtitleIndex,
      setSubtitle
    );
  };

  const handleSelectFilterOption = () => {
    selectFilterOption(selected, subtitleIndex, filterData, setFilterOptions);
  };

  const handleGetFilteredGames = () => {
    getFilteredGames(selected, subtitle, filterData, setFilter);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilterTitles
            name={item.name}
            id={item.id}
            selectedID={selected}
            option={subtitle}
          />
        )}
      />
      <View style={styles.directionsContainer}>
        <Pressable
          onPress={handleUpSubtitle}
          style={({ pressed }) => [
            styles.pressableContainer,
            { opacity: pressed ? 1 : 0.7 },
          ]}
        >
          <FontAwesome
            name="caret-up"
            color="orange"
            style={styles.directionButtons}
            backgroundColor="rgba(255, 255, 255, 0)"
            size={50}
          />
        </Pressable>
        <View style={styles.leftRightContainer}>
          <Pressable
            onPress={handleLeftArrow}
            style={({ pressed }) => [
              styles.pressableContainer,
              { opacity: pressed ? 1 : 0.7 },
            ]}
          >
            <FontAwesome
              name="caret-left"
              color="orange"
              style={styles.directionButtons}
              backgroundColor="rgba(255, 255, 255, 0)"
              size={50}
            />
          </Pressable>
          <Pressable
            onPress={handleSelectFilterOption}
            style={({ pressed }) => [
              styles.pressableContainer,
              { opacity: pressed ? 1 : 0.5 },
            ]}
          >
            <Ant
              name="plussquare"
              color="orange"
              style={styles.directionButtons}
              backgroundColor="rgba(255, 255, 255, 0)"
              size={40}
            />
          </Pressable>
          <Pressable
            onPress={handleRightArrow}
            style={({ pressed }) => [
              styles.pressableContainer,
              { opacity: pressed ? 1 : 0.7 },
            ]}
          >
            <FontAwesome
              name="caret-right"
              color="orange"
              style={styles.directionButtons}
              backgroundColor="rgba(255, 255, 255, 0)"
              size={50}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={handleDownSubtitle}
          style={({ pressed }) => [
            styles.pressableContainer,
            { opacity: pressed ? 1 : 0.7 },
          ]}
        >
          <FontAwesome
            name="caret-down"
            color="orange"
            style={styles.directionButtons}
            backgroundColor="rgba(255, 255, 255, 0)"
            size={50}
          />
        </Pressable>
      </View>
      <View style={styles.selectedFilterView}>
        {filterOptions ? (
          <View style={styles.selectedOptionView}>
            <Text style={styles.selectedOptionText}>{filterOptions}</Text>
          </View>
        ) : (
          <View style={styles.selectedOptionView}>
            <Text style={styles.selectedOptionText}>Filter tag</Text>
          </View>
        )}
        <Pressable
          onPress={handleGetFilteredGames}
          style={({ pressed }) => [
            styles.pressableContainer,
            { opacity: pressed ? 1 : 0.6 },
          ]}
        >
          <FontAwesome
            name="filter"
            color="orange"
            style={styles.directionButtons}
            backgroundColor="rgba(255, 255, 255, 0)"
            size={30}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Filter;
