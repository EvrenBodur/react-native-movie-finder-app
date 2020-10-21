import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  fetchSearchTvSeries,
  searchTvSeriesCleaner,
} from "../../src/actions/tvSeriesActions";
import {
  fetchTvSeriesCategories,
  fetchSelectedTvSeriesCategory,
} from "../../src/actions/categoriesActions";
import { cleanSearchTvSeries } from "../../src/actions/actionCreators";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TvSeries from "./TvSeries";
import Categories from "../Categories";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";

const Tab = createMaterialBottomTabNavigator();

const TvSeriesScreen = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [value, onChangeText] = useState("");

  const { searchTvSeries } = useSelector((state) => state.searchTvSeriesStore);
  const {
    tvSeriesCategories,
    selectedTvSeriesCategory,
    hasError,
  } = useSelector((state) => state.tvSeriesCategoriesStore);

  useEffect(() => {
    dispatch(fetchSearchTvSeries(value));
    return () => {
      dispatch(cleanSearchTvSeries());
    };
  }, [value, dispatch]);

  useEffect(() => {
    dispatch(fetchTvSeriesCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSelectedTvSeriesCategory(selectedValue));
  }, [selectedValue, dispatch]);

  return (
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
            <MaterialCommunityIcons name="movie" color={color} size={26} />
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
          <Search onChangeText={onChangeText} items={searchTvSeries} />
        )}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TvSeriesScreen;
