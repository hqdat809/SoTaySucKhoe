import { Avatar, Dialog } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../components/loading/LoadingComponent";
import { logOutAction } from "../../stores/actions/auth-actions";
import { getSubjectAction } from "../../stores/actions/subject-actions";
import { ESubjectAction } from "../../stores/actions/subject-actions/constants";
import { getAllSourceAction } from "../../stores/actions/source-actions";
import { ESourceAction } from "../../stores/actions/source-actions/constants";
import SourceItem from "../../components/sourceItem/SourceItem";
import Text from "../../components/text/Text";
import TextInput from "../../components/text-input/TextInput";
import { TRootState } from "../../stores/reducers";

interface IProps {
  navigation: any; // Replace with your own navigation prop type
}
const HomeScreen = ({ navigation }: IProps) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: TRootState) => state.authUser.userData);
  const subjects = useSelector((state: TRootState) => state.subject.subjects);
  const popularSource = useSelector(
    (state: TRootState) => state.source.popularSources
  );
  const subjectLoading = useSelector(
    (state: TRootState) => state.loading[ESubjectAction.GET_SUBJECT]
  );
  const sourceLoading = useSelector(
    (state: TRootState) => state.loading[ESourceAction.GET_ALL_SOURCE]
  );

  const [logOutModal, setLogOutModal] = useState(false);

  const handleRenderSubjectItem = ({ item }: any) => (
    <SubjectItem key={item.id} item={item} />
  );

  const handleRenderPopularItem = ({ item }: any) => {
    const subjectOfItem = subjects.find(
      (subject) => item.subjectId == subject.id
    );

    return <PopularItem key={item.id} item={item} subject={subjectOfItem} />;
  };

  const handleNavigateProfile = () => {
    navigation.navigate("Profile");
  };

  const handleLogout = () => {
    dispatch(
      logOutAction(() => {
        navigation.navigate("Login");
      })
    );
  };

  const handleGetSubject = () => {
    dispatch(getSubjectAction());
  };

  const handleGetAllSource = () => {
    dispatch(getAllSourceAction());
  };

  useEffect(() => {
    handleGetSubject();
    handleGetAllSource();
    console.log("userData: ", userData?.uid);
  }, []);

  const handleClickSubject = (subject: any) => {
    navigation.navigate("Source", { subject });
  };

  const handleNavigateSearchPage = () => {
    navigation.navigate("Search");
  };

  const SubjectItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => {
        handleClickSubject(item);
      }}
    >
      <Icon name={item.icon} size={24} color="#000" />
      <Text
        style={{
          textAlign: "center",
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const PopularItem = ({ item, subject }: any) => (
    <SourceItem
      key={item.id}
      item={item}
      subject={subject}
      navigation={navigation}
    />
  );

  if (sourceLoading) {
    return <LoadingComponent />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerWelcome}>
          <View>
            <Text style={styles.welcomeText}>
              Chào mừng, {userData?.username}
            </Text>
            <Text style={styles.wishText}>Keep Health!</Text>
          </View>
          <View>
            <Icon
              name="log-out-outline"
              color="white"
              size={30}
              onPress={() => setLogOutModal(!logOutModal)}
            />
          </View>
          <View style={styles.searchWrapper}>
            <Icon
              name="search"
              style={styles.searchIcon}
              size={20}
              color="#000"
            />
            <TextInput
              placeholder="Nhập vấn đề bạn muốn tìm kiếm..."
              style={styles.searchBox}
              onFocus={handleNavigateSearchPage}
            />
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.infoBox}>
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 14 }}
            onPress={() => handleNavigateProfile()}
          >
            <Avatar
              size={60}
              title={userData?.username.split("")[0].toUpperCase()}
              containerStyle={{ backgroundColor: "#9780b9" }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                {userData?.username}
              </Text>
              <View style={{ flexDirection: "row", gap: 50 }}>
                <Text style={{ color: "#fff", fontSize: 14 }}>
                  {userData?.email}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 18 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Chủ đề</Text>
          <FlatList
            data={subjects}
            renderItem={handleRenderSubjectItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <View style={{ marginTop: 18 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Câu hỏi thường gặp
          </Text>
          <View>
            <FlatList
              data={popularSource}
              renderItem={handleRenderPopularItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>

      {/* Dialog */}
      <Dialog
        isVisible={logOutModal}
        onBackdropPress={() => setLogOutModal(!logOutModal)}
      >
        <Dialog.Title title="Bạn có muốn đăng xuất?" />
        <Dialog.Actions>
          <Dialog.Button title="Đăng xuất" onPress={handleLogout} />
          <Dialog.Button
            title="Hủy"
            onPress={() => setLogOutModal(!logOutModal)}
          />
        </Dialog.Actions>
      </Dialog>
    </ScrollView>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#F5F5F5",
  },
  infoBox: {
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: "#4169e1",
  },
  searchIcon: {
    paddingLeft: 20,
  },

  searchWrapper: {
    position: "absolute",
    top: 50,
    marginTop: 20,
    borderRadius: 80,
    overflow: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    backgroundColor: "#F5F5F5",
    paddingRight: 16,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    marginTop: 30,
    padding: 16,
  },
  searchBox: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  header: {
    position: "relative",
    padding: 16,
    paddingTop: 10,
    paddingBottom: 40,
    width: "100%",
    display: "flex",
    backgroundColor: "#4169e1",
  },
  headerWelcome: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },
  welcomeText: {
    color: "#fff",
  },
  wishText: {
    color: "#fff",
    fontSize: 26,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    paddingBottom: 12,
    textAlign: "left",
  },
  popularItem: {
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
  item: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    width: 150,
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

export default HomeScreen;
