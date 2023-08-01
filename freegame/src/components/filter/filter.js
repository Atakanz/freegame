import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./filter.style";
import AntDesign from "@expo/vector-icons/AntDesign";
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
  const [filterOptions, setFilterOptions] = useState([]);
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
    selectFilterOption(
      selected,
      subtitleIndex,
      filterData,
      setFilterOptions,
      filterOptions
    );
  };
  const handleGetFilteredGames = () => {
    getFilteredGames(selected, subtitle, filterData, setFilter, filterOptions);
  };

  const handleDeleteFilters = () => {
    setFilterOptions([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowFilterContainer}>
        <View style={styles.filterTitlesOutline}>
          <View>
            <FlatList
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
          </View>
        </View>
        <View style={styles.directionsContainer}>
          <Pressable
            onPress={handleDownSubtitle}
            style={({ pressed }) => [
              styles.pressableContainer,
              { opacity: pressed ? 1 : 0.7 },
            ]}
          >
            <AntDesign
              name="caretleft"
              color="orange"
              style={styles.directionButtons}
              backgroundColor="rgba(255, 255, 255, 0)"
              size={40}
            />
          </Pressable>
          <View style={styles.upDownContainer}>
            <Pressable
              onPress={handleLeftArrow}
              style={({ pressed }) => [
                styles.pressableContainerUp,
                { opacity: pressed ? 1 : 0.7 },
              ]}
            >
              <AntDesign
                name="caretup"
                color="orange"
                style={styles.directionButtons}
                backgroundColor="rgba(255, 255, 255, 0)"
                size={40}
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
                size={50}
              />
            </Pressable>
            <Pressable
              onPress={handleRightArrow}
              style={({ pressed }) => [
                styles.pressableContainer,
                { opacity: pressed ? 1 : 0.7 },
              ]}
            >
              <AntDesign
                name="caretdown"
                color="orange"
                style={styles.directionButtons}
                backgroundColor="rgba(255, 255, 255, 0)"
                size={40}
              />
            </Pressable>
          </View>
          <Pressable
            onPress={handleUpSubtitle}
            style={({ pressed }) => [
              styles.pressableContainer,
              { opacity: pressed ? 1 : 0.7 },
            ]}
          >
            <AntDesign
              name="caretright"
              color="orange"
              style={styles.directionButtons}
              backgroundColor="rgba(255, 255, 255, 0)"
              size={40}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.filterTrashSection}>
        <View style={styles.selectedFilterView}>
          {filterOptions.length !== 0 ? (
            <View>
              <FlatList
                horizontal
                data={filterOptions}
                keyExtractor={(item, index) => item}
                renderItem={({ item, index }) => (
                  <View style={styles.selectedOptionView}>
                    <Text style={styles.selectedOptionText}>{item[1]}</Text>
                  </View>
                )}
              />
            </View>
          ) : (
            <View style={styles.selectedOptionView}>
              <Text style={styles.selectedOptionText}>Select tags</Text>
            </View>
          )}
          <View style={styles.deleteFilterView}>
            <Pressable
              onPress={handleGetFilteredGames}
              style={({ pressed }) => [
                styles.deleteContainer,
                { opacity: pressed ? 1 : 0.7 },
              ]}
            >
              <AntDesign
                name="filter"
                color="orange"
                style={styles.directionButtons}
                backgroundColor="rgba(255, 255, 255, 0)"
                size={30}
              />
            </Pressable>
            <Pressable
              onPress={handleDeleteFilters}
              style={({ pressed }) => [
                styles.pressableContainer,
                { opacity: pressed ? 1 : 0.7 },
              ]}
            >
              <AntDesign
                name="delete"
                color="orange"
                style={styles.directionButtons}
                backgroundColor="rgba(255, 255, 255, 0)"
                size={30}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Filter;
