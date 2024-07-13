import React, { useEffect, useState } from "react";
import { FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSourceAction } from "../../stores/actions/source-actions";
import Header from "../../components/header/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { ESourceAction } from "../../stores/actions/source-actions/constants";
import LoadingComponent from "../../components/loading/LoadingComponent";
import SourceItem from "../../components/sourceItem/SourceItem";
import HeaderHasSearch from "../../components/header/HeaderHasSearch";
import { ESubjectAction } from "../../stores/actions/subject-actions/constants";
import { TRootState } from "../../stores/reducers";
interface IProps {
  route: any;
  navigation: any;
}
const SearchScreen = ({ route, navigation }: IProps) => {
  const dispatch = useDispatch();
  const sources = useSelector((state: TRootState) => state.source.sources);
  const allSource = useSelector(
    (state: TRootState) => state.source.popularSources
  );
  const subjects = useSelector((state: TRootState) => state.subject.subjects);
  const [sourceData, setSourceData] = useState(allSource);

  const handleRenderPopularItem = ({ item }: any) => {
    const subject = subjects?.find((s) => s.id === item.subjectId);

    return <PopularItem key={item.id} item={item} subject={subject} />;
  };

  const PopularItem = ({ item, subject }: any) => (
    <SourceItem
      key={item.id}
      item={item}
      subject={subject}
      navigation={navigation}
    />
  );

  return (
    <View>
      <HeaderHasSearch
        title={"Tìm Kiếm"}
        navigation={navigation}
        sources={allSource}
        setSourceData={setSourceData}
        autoFocus={true}
      />
      <View style={styles.container}>
        <FlatList
          data={sourceData || allSource}
          renderItem={handleRenderPopularItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { padding: 12 },
});
