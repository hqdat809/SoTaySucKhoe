import { View, ActivityIndicator, Dimensions } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

interface IProps {}

const LoadingComponent = ({}: IProps) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  loading: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

export default LoadingComponent;
