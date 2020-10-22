import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  fetchSearchMovies,
  searchMovieCleaner,
} from "../../src/actions/moviesActions";
import {
  fetchMovieCategories,
  fetchSelectedMovieCategory,
} from "../../src/actions/categoriesActions";
import { cleanSearchMovies } from "../../src/actions/actionCreators";
import Movies from "./Movies";
import Categories from "../Categories";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";
import Details from "../Details";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MoviesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [value, onChangeText] = useState("");

  const { searchMovies } = useSelector((state) => state.searchMoviesStore);
  const { movieCategories, selectedMovieCategory } = useSelector(
    (state) => state.movieCategoriesStore
  );

  useEffect(() => {
    dispatch(fetchSearchMovies(value));
    return () => {
      dispatch(cleanSearchMovies());
    };
  }, [value, dispatch]);

  useEffect(() => {
    dispatch(fetchMovieCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSelectedMovieCategory(selectedValue));
  }, [selectedValue, dispatch]);

  return (
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
                  categories={movieCategories}
                  movies={selectedMovieCategory}
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
                  items={searchMovies}
                  navigation={navigation}
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

export default MoviesScreen;
