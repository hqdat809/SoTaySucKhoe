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
import { TRootState } from "../../stores/reducers";
interface IProps {
  route: any;
  navigation: any;
}
const SourceScreen = ({ route, navigation }: IProps) => {
  const dispatch = useDispatch();
  const sources = useSelector((state: TRootState) => state.source.sources);

  const [sourceData, setSourceData] = useState(sources);
  const sourceLoading = useSelector(
    (state: TRootState) => state.loading[ESourceAction.GET_SOURCE]
  );
  const searchSourceLoading = useSelector(
    (state: TRootState) => state.loading[ESourceAction.SEARCH_SOURCE]
  );

  const { subject } = route.params;

  const handleGetSources = () => {
    dispatch(getSourceAction(subject.id));
  };

  const handleRenderPopularItem = ({ item }: any) => {
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

  useEffect(() => {
    handleGetSources();
  }, []);

  if (sourceLoading) {
    return <LoadingComponent />;
  }

  return (
    <View>
      <HeaderHasSearch
        title={subject.title}
        navigation={navigation}
        sources={sources}
        setSourceData={setSourceData}
      />
      {searchSourceLoading ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={sourceData || sources}
            renderItem={handleRenderPopularItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 12 },
});

export default SourceScreen;
