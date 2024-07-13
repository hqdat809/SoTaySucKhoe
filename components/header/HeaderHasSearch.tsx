import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import TextInput from "../text-input/TextInput";
import { useDispatch } from "react-redux";
import { searchSourceAction } from "../../stores/actions/source-actions";

interface IProps {
  title: string;
  navigation: any;
  sources: any;
  setSourceData: (data: any) => void;
  autoFocus?: boolean;
}

const HeaderHasSearch = ({
  title,
  navigation,
  sources,
  setSourceData,
  autoFocus,
}: IProps) => {
  const dispatch = useDispatch();
  const [onSearching, setOnSearching] = useState(autoFocus || false);
  const [searchText, setSearchText] = useState("");
  const goBack = () => {
    navigation.goBack();
  };

  const toggleSearching = () => {
    setOnSearching(!onSearching);
  };

  const handleClickClose = () => {
    setSearchText("");
    setOnSearching(false);
  };

  useEffect(() => {
    const filteredSource = sources.filter((data: any) => {
      console.log(data.title, searchText);
      return data.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setSourceData(filteredSource);
  }, [searchText]);

  return (
    <View>
      {!onSearching ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={goBack} style={styles.iconWrapper}>
            <Icon name="return-up-back-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.textTitle}>{title}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={toggleSearching}
          >
            <Icon name="search" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
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
              value={searchText}
              autoFocus={autoFocus}
              onChangeText={(value: any) => {
                setSearchText(value);
              }}
            />
            <TouchableOpacity>
              <Icon
                name="close"
                size={20}
                color="#000"
                onPress={handleClickClose}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default HeaderHasSearch;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    backgroundColor: "#4169e1",
  },

  closeIcon: {
    padding: 4,
    backgroundColor: "#ccc",
    borderRadius: 50,
    opacity: 0.6,
  },
  searchIcon: {
    paddingLeft: 20,
  },
  searchBox: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  searchWrapper: {
    borderRadius: 80,
    overflow: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
    paddingRight: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },
});
