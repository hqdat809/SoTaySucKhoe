import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Text from "../text/Text";

interface IProps {
  item: any;
  subject: any;
  navigation: any;
}

const SourceItem = ({ item, subject, navigation }: IProps) => {
  const handleNavigateSourceDetails = (source: any) => {
    navigation.navigate("SourceDetails", { source });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.sourceItem}
      onPress={() => handleNavigateSourceDetails(item)}
    >
      <Icon name={subject?.icon} size={30} style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 2, marginLeft: 4 }}>
          {item?.title}
        </Text>
        <Text style={{}}> Chủ đề: {subject?.title}</Text>
      </View>
      <Icon name="chevron-forward-outline" color="#000" size={30} />
    </TouchableOpacity>
  );
};

export default SourceItem;

const styles = StyleSheet.create({
  sourceItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
