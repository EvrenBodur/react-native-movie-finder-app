import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import upcomingMoviesReducer from "./upcomingMoviesReducer";
import popularTvSeriesReducer from "./popularTvSeriesReducer";
import topRatedTvSeriesReducer from "./topRatedTvSeriesReducer";
import onTheAirTvSeriesReducer from "./onTheAirTvSeriesReducer";
import searchMoviesReducer from "./searchMoviesReducer";
import searchTvSeriesReducer from "./searchTvSeriesReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  popularMoviesStore: popularMoviesReducer,
  topRatedMoviesStore: topRatedMoviesReducer,
  upcomingMoviesStore: upcomingMoviesReducer,
  popularTvSeriesStore: popularTvSeriesReducer,
  topRatedTvSeriesStore: topRatedTvSeriesReducer,
  onTheAirTvSeriesStore: onTheAirTvSeriesReducer,
  searchMoviesStore: searchMoviesReducer,
  searchTvSeriesStore: searchTvSeriesReducer,
  categoriesStore: categoriesReducer,
});

export default rootReducer;
