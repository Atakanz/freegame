import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { useFonts } from "expo-font";
import Title from "./src/components/title/title";
import { fetchData } from "./utils/http";
import GameCard from "./src/components/gameCard/gameCard";
import Filter from "./src/components/filter/filter";
import Loading from "./src/components/animation/loading";
import styles from "./App.style";

const App = () => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    async function getGames() {
      setLoading(true);
      const data = await fetchData(filterOptions);
      setGames(data);
      setTimeout(() => {
        setLoading(false); // Set loading to false after 2 seconds
      }, 500); // 2000 milliseconds = 2 seconds
    }
    getGames();
  }, [filterOptions]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(39,43,48)" }}>
      <Title />
      <Filter setFilter={setFilterOptions} />
      <View style={styles.flatViewContainer}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GameCard obj={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
