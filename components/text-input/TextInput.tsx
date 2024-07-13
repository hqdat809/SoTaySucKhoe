import React from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";

interface IProps extends TextInputProps {}

const TextInput = ({ style, ...props }: IProps) => {
  return <RNTextInput style={[styles.textInput, style]} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
  textInput: { fontFamily: "Comfortaa-Bold" },
});
