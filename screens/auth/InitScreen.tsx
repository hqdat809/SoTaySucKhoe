import { useFonts } from "@expo-google-fonts/inter";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import ButtonComponent from "../../components/button/ButtonComponent";
import Text from "../../components/text/Text";

const image = { uri: "." };

const { height } = Dimensions.get("window");

interface IProps {
  navigation: any; // Replace with your own navigation prop type
}

const InitScreen = ({ navigation }: IProps) => {
  const handleNavigateLoginPage = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/BackgroundInitPage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Sổ Tay Dinh Dưỡng</Text>
      </ImageBackground>
      <View style={styles.actions}>
        <ButtonComponent title="Đăng nhập" onPress={handleNavigateLoginPage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  actions: {
    padding: 16,
    minHeight: 30,
  },
  button: {
    padding: 20,
    backgroundColor: "#000000c0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default InitScreen;
