import React from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
interface IProps {
  navigation: any;
}
const OnboardingScreen = ({ navigation }: IProps) => {
  const handleDoneAndSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <Onboarding
      onDone={handleDoneAndSkip}
      onSkip={handleDoneAndSkip}
      SkipButtonComponent={(e) => (
        <TouchableOpacity {...e}>
          <Text>Bỏ qua</Text>
        </TouchableOpacity>
      )}
      NextButtonComponent={(e) => (
        <TouchableOpacity {...e}>
          <Text>Tiếp tục</Text>
        </TouchableOpacity>
      )}
      DoneButtonComponent={(e) => (
        <TouchableOpacity {...e} onPress={handleDoneAndSkip}>
          <Text>Hoàn thành</Text>
        </TouchableOpacity>
      )}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img1.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img2.png")}
            />
          ),
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img3.png")}
            />
          ),
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};
const { height } = Dimensions.get("window");

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    height: height,
    flex: 1,
    justifyContent: "center",
  },
});
