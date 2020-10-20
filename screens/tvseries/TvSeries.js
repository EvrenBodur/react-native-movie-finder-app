import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularTvSeries,
  fetchTopRatedTvSeries,
  fetchOnTheAirTvSeries,
} from "../../src/actions/tvSeriesActions";
import Container from "../Container";

const Tab = createMaterialTopTabNavigator();

const TvSeries = () => {
  const dispatch = useDispatch();
  const { popularTvSeries } = useSelector(
    (state) => state.popularTvSeriesStore
  );
  const { topRatedTvSeries } = useSelector(
    (state) => state.topRatedTvSeriesStore
  );
  const { onTheAirTvSeries, hasError } = useSelector(
    (state) => state.onTheAirTvSeriesStore
  );

  useEffect(() => {
    dispatch(fetchPopularTvSeries());
    dispatch(fetchTopRatedTvSeries());
    dispatch(fetchOnTheAirTvSeries());
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
        children={() => <Container movies={popularTvSeries} />}
        options={{
          tabBarLabel: "Popular",
        }}
      />
      <Tab.Screen
        name="TopRated"
        children={() => <Container movies={topRatedTvSeries} />}
        options={{
          tabBarLabel: "Top Rated",
        }}
      />
      <Tab.Screen
        name="Ontheair"
        children={() => <Container movies={onTheAirTvSeries} />}
        options={{
          tabBarLabel: "On the Air",
        }}
      />
    </Tab.Navigator>
  );
};

export default TvSeries;
