import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacityProps,
} from "react-native";
import Text from "../text/Text";

interface IProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  buttonStyle?: any;
  textStyle?: any;
  disabled?: boolean;
}

const ButtonComponent = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  disabled,
  ...props
}: IProps) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? [styles.button, buttonStyle, styles.buttonDisabled]
          : [styles.button, buttonStyle]
      }
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      {...props}
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
  buttonDisabled: {
    backgroundColor: "#ccc",
    borderColor: "#ccc",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default ButtonComponent;
