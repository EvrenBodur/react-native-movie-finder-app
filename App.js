import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import MoviesScreen from "./screens/movies/MoviesScreen";
import TvSeriesScreen from "./screens/tvseries/TvSeriesScreen";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, Text, View } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  const DrawerTitle = (props) => {
    return (
      <View>
        <View
          style={{
            width: "100%",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Movie Finder</Text>
        </View>

        <DrawerItemList {...props} />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#18171A" />
      <SafeAreaProvider>
        <SafeAreaView style={{ width: "100%", height: "100%" }}>
          <NavigationContainer>
            <Drawer.Navigator
              openByDefault
              drawerType="back"
              drawerContentOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "white",
              }}
              initialRouteName="Movies"
              drawerStyle={{ backgroundColor: "#18171A" }}
              drawerContent={(props) => DrawerTitle(props)}
            >
              <Drawer.Screen
                name="MoviesScreen"
                component={MoviesScreen}
                options={{ drawerLabel: "Movies" }}
              />
              <Drawer.Screen
                name="TvSeriesScreen"
                component={TvSeriesScreen}
                options={{ drawerLabel: "Tv Series" }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
