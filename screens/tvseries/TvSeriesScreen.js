import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  fetchSearchTvSeries,
  searchTvSeriesCleaner,
} from "../../src/actions/tvSeriesActions";
import {
  fetchTvSeriesCategories,
  fetchSelectedTvSeriesCategory,
} from "../../src/actions/categoriesActions";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TvSeries from "./TvSeries";
import Categories from "../Categories";
import Search from "../Search";
import Details from "../Details";
import { useDispatch, useSelector } from "react-redux";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TvSeriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [value, onChangeText] = useState("");

  const { searchTvSeries } = useSelector((state) => state.searchTvSeriesStore);
  const { tvSeriesCategories, selectedTvSeriesCategory } = useSelector(
    (state) => state.tvSeriesCategoriesStore
  );

  useEffect(() => {
    if (value === "") return;
    dispatch(fetchSearchTvSeries(value));
  }, [value, dispatch]);

  useEffect(() => {
    dispatch(fetchTvSeriesCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSelectedTvSeriesCategory(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#18171A",
          height: 35,
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
          <Tab.Navigator
            initialRouteName="TvSeries"
            activeColor="tomato"
            inactiveColor="white"
            barStyle={{ backgroundColor: "#33353D" }}
          >
            <Tab.Screen
              name="TvSeries"
              component={TvSeries}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="movie"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Categories"
              children={() => (
                <Categories
                  categories={tvSeriesCategories}
                  movies={selectedTvSeriesCategory}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  navigation={navigation}
                />
              )}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="book" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              children={() => (
                <Search
                  onChangeText={onChangeText}
                  items={searchTvSeries}
                  navigation={navigation}
                  value={value}
                />
              )}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="search-web"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default TvSeriesScreen;
