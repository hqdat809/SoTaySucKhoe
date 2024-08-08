import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../components/text/Text";
import { Avatar } from "@rneui/themed";
import { useSelector } from "react-redux";
import { TRootState } from "../../stores/reducers";
import Icon from "react-native-vector-icons/Ionicons";

interface IProps {
  navigation: any; // Replace with your own navigation prop type
}
const ProfileScreen = ({ navigation }: IProps) => {
  const userData: any = useSelector(
    (state: TRootState) => state.authUser.userData
  );

  const navigateChangePassword = () => {
    navigation.navigate("ChangePassword");
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>HỒ SƠ</Text>
        <View style={styles.avatar}>
          <Avatar
            size={68}
            rounded={true}
            title={userData?.username.split("")[0].toUpperCase()}
            containerStyle={{ backgroundColor: "#9780b9" }}
          />
          <Text style={styles.name}>
            {userData?.username} | {userData.email}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={{ gap: 5 }}>
            <Text style={styles.itemLabel}>Địa chỉ email (Tên đăng nhập) </Text>
            <Text style={styles.itemInfo}>{userData.email}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={{ gap: 5 }}>
            <Text style={styles.itemLabel}>Mật khẩu</Text>
            <Text style={styles.itemInfo}>*************</Text>
          </View>
          <Icon
            name="create-outline"
            color="#4169e1"
            size={30}
            onPress={() => navigateChangePassword()}
          />
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
  itemLabel: {
    color: "#707070",
    fontSize: 15,
  },
  itemInfo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 22,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 16,
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
