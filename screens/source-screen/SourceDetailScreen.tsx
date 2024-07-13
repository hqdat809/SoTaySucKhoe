import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import Markdown from "react-native-markdown-display";
import { ScrollView } from "react-native-virtualized-view";
interface IProps {
  route: any;
  navigation: any;
}
const SourceDetailScreen = ({ navigation, route }: IProps) => {
  const { source } = route.params;

  return (
    <SafeAreaView>
      <Header title={source.title} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Markdown style={markdownStyles}>{source.content}</Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SourceDetailScreen;

const { height, width } = Dimensions.get("window");

const markdownStyles: any = {
  body: {
    fontSize: 16,
    fontFamily: "Comfortaa-Bold",
    wordSpacing: 2,
    lineHeight: 24,
  },
  heading1: {
    fontSize: 24,
    color: "blue",
  },
  heading2: {
    fontSize: 20,
    color: "green",
  },
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic",
    color: "purple",
  },
  link: {
    color: "orange",
  },
  bullet_list: {
    lineHeight: 24,
  },
  bullet_list_icon: {
    color: "black",
  },
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingBottom: 100,
  },
});
