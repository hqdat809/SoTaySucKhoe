// App.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Text from "./components/text/Text";
import InitScreen from "./screens/auth/InitScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SearchScreen from "./screens/search/SearchScreen";
import SourceDetailScreen from "./screens/source-screen/SourceDetailScreen";
import SourceScreen from "./screens/source-screen/SourceScreen";
import { TRootState } from "./stores/reducers";
import configureStore from "./stores/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen
        name="Init"
        component={InitScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "Đăng nhập",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Source"
        component={SourceScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SourceDetails"
        component={SourceDetailScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const AppStack = () => {
  const screenOptionsFunction = ({ route }: any) => ({
    tabBarIcon: ({ focused, color, size }: any) => {
      let iconName;
      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "Profile") {
        iconName = "person";
      }

      return <Icon name={iconName || ""} size={size} color={color} />;
    },
    tabBarLabel: ({ focused, color, size }: any) => {
      return (
        <Text style={{ color: focused ? "#4169e1" : "gray" }}>
          {route.name}
        </Text>
      );
    },
    tabBarActiveTintColor: "#4169e1",
    tabBarInactiveTintColor: "gray",
  });

  return (
    <BottomTabs.Navigator screenOptions={screenOptionsFunction}>
      <BottomTabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={AppStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function RootRouter() {
  const userData = useSelector((state: TRootState) => state.authUser.userData);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="royalblue" />
        <NavigationContainer>
          {userData ? <AuthenticatedStack /> : <AuthStack />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

export default function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  loading: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  app: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Comfortaa-Bold",
    fontWeight: "bold",
    textAlign: "center",
  },
});
