import { StyleSheet, Text as RNText, View, TextProps } from "react-native";
import React from "react";

interface IProps extends TextProps {}

const Text = ({ style, ...props }: IProps) => {
  return <RNText style={[styles.text, style]} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Comfortaa-Bold", // Replace with your custom font name
  },
});
