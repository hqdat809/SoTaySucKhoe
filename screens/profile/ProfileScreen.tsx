import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../components/text/Text";
import { Avatar } from "@rneui/themed";
import { useSelector } from "react-redux";
import { TRootState } from "../../stores/reducers";

const ProfileScreen = () => {
  const userData: any = useSelector(
    (state: TRootState) => state.authUser.userData
  );

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>HỒ SƠ</Text>
        <View style={styles.avatar}>
          <Avatar
            size={60}
            title="A"
            containerStyle={{ backgroundColor: "#9780b9" }}
          />
          <Text style={styles.name}>Admin | {userData.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4169e1",
    padding: 16,
    minHeight: 100,
    position: "relative",
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  avatar: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    top: 55,
    left: 12,
    zIndex: 1,
  },
  name: {
    color: "white",
    fontSize: 16,
  },
});

export default ProfileScreen;
