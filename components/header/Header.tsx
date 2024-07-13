import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface IProps {
  title: string;
  navigation: any
}

const Header = ({ title, navigation }: IProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.iconWrapper}>
        <Icon name="return-up-back-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    justifyContent: "space-between",
    backgroundColor: "#4169e1",
  },

  iconWrapper: {
    width: 40,
    height: 40,
  },

  titleWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    marginRight: 45,
  },
});
