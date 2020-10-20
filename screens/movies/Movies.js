import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../../src/actions/moviesActions";

import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

const Movies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.popularMoviesStore);
  const { topRatedMovies } = useSelector((state) => state.topRatedMoviesStore);
  const { upcomingMovies } = useSelector((state) => state.upcomingMoviesStore);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
        activeTintColor: "tomato",
        inactiveTintColor: "white",
        indicatorStyle: {
          backgroundColor: "tomato",
        },

        tabStyle: { flex: 1 },
        style: {
          backgroundColor: "#33353D",
        },
      }}
    >
      <Tab.Screen
        name="Popular"
        children={() => <Container movies={popularMovies} />}
        options={{
          tabBarLabel: "Popular",
        }}
      />
      <Tab.Screen
        name="TopRated"
        children={() => <Container movies={topRatedMovies} />}
        options={{
          tabBarLabel: "Top Rated",
        }}
      />
      <Tab.Screen
        name="Upcoming"
        children={() => <Container movies={upcomingMovies} />}
        options={{
          tabBarLabel: "Upcomıng",
        }}
      />
    </Tab.Navigator>
  );
};

export default Movies;
