import React from "react";
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <LottieView
      source={require("../../src/assets/animations/loading.json")}
      autoPlay
    />
  );
};

export default LoadingScreen;
