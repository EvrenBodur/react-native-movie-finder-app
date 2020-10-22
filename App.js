import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import MoviesScreen from "./screens/movies/MoviesScreen";
import TvSeriesScreen from "./screens/tvseries/TvSeriesScreen";
import Details from "./screens/Details";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, Text, View } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#18171A",
                  height: 30,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            >
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                children={() => (
                  <Drawer.Navigator
                    openByDefault
                    drawerType="back"
                    drawerContentOptions={{
                      activeTintColor: "tomato",
                      inactiveTintColor: "white",
                    }}
                    initialRouteName="MoviesScreen"
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
                )}
              />
              <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
