import React, { useRef, useEffect } from "react";
import AnimatedLottieView from "lottie-react-native";
import { SafeAreaView } from "react-native";
import styles from "./loading.style";
function Loading() {
  const animation = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedLottieView
        source={require("./animation_lkpdvyni.json")}
        autoPlay
        speed={3}
        style={styles.loading}
        ref={animation}
      />
    </SafeAreaView>
  );
}

export default Loading;
