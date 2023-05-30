import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import Title from "./src/components/title/title";
import AppLoading from "expo-app-loading";
import { fetchData } from "./utils/http";
import GameCard from "./src/components/gameCard/gameCard";
import Filter from "./src/components/filter/filter";
import styles from "./App.style";

const App = () => {
  const [games, setGames] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    filterType: "single",
    category: "",
    subTitle: "",
  });
  const [fontsLoaded] = useFonts({
    "app-logo": require("./assets/fonts/ZilapGamePunkDemoMod1-JRZVE.ttf"),
    "sans-serif": require("./assets/fonts/Swansea-q3pd.ttf"),
  });
  console.log("app", filterOptions);
  useEffect(() => {
    async function getGames() {
      const data = await fetchData(filterOptions);
      setGames(data);
    }
    getGames();
  }, [filterOptions]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          "rgba(39, 43, 48, 1)",
          "rgba(53, 141, 230, 0.8)",
          "rgba(39, 43, 48, 1)",
        ]}
        start={[0.3, 0.1]}
        end={[0.3, 0.3]}
        locations={[0.39, 0.17, 0.46]}
        style={{ flex: 1 }}
      >
        <Title />
        <Filter setFilter={setFilterOptions} />
        <View style={styles.flatViewContainer}>
          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GameCard obj={item} />}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
