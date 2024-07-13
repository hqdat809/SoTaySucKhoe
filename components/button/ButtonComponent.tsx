import React from "react";
import { TouchableOpacity, StyleSheet, View, Touchable } from "react-native";
import Text from "../text/Text";

interface IProps {
  onPress: () => void;
  title: string;
  buttonStyle?: any;
  textStyle?: any;
}

const ButtonComponent = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
}: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default ButtonComponent;
