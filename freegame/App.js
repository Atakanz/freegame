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
  const [fontsLoaded] = useFonts({
    "app-logo": require("./assets/fonts/ZilapGamePunkDemoMod1-JRZVE.ttf"),
    "sans-serif": require("./assets/fonts/Swansea-q3pd.ttf"),
  });

  useEffect(() => {
    async function getGames() {
      await fetchData().then((res) => setGames(res));
    }
    getGames();
  }, []);

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
        <Filter />
        <View style={styles.flatViewContainer}>
          <FlatList
            data={games}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <GameCard obj={item} />}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
