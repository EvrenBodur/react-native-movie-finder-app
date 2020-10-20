import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  fetchSearchMovies,
  searchMovieCleaner,
} from "../../src/actions/moviesActions";
import {
  fetchCategories,
  fetchSelectedCategory,
} from "../../src/actions/categoriesActions";
import { cleanSearchMovies } from "../../src/actions/actionCreators";
import Movies from "./Movies";
import Categories from "../Categories";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";

const Tab = createMaterialBottomTabNavigator();

const MoviesScreen = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [value, onChangeText] = useState("");

  const { searchMovies } = useSelector((state) => state.searchMoviesStore);
  const { categories, selectedCategoryMovies, hasError } = useSelector(
    (state) => state.categoriesStore
  );

  useEffect(() => {
    dispatch(fetchSearchMovies(value));
    return () => {
      dispatch(cleanSearchMovies());
    };
  }, [value, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSelectedCategory(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      activeColor="tomato"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#33353D" }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
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
            categories={categories}
            movies={selectedCategoryMovies}
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
          <Search onChangeText={onChangeText} items={searchMovies} />
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

export default MoviesScreen;
