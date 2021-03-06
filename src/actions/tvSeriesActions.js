import * as action from "./actionCreators";

export const fetchPopularTvSeries = () => async (dispatch) => {
  dispatch(action.getPopularTvSeries());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
    );
    const data = await response.json();
    dispatch(action.getPopularTvSeriesSuccess(data));
  } catch (error) {
    dispatch(action.getPopularTvSeriesFail(error));
  }
};

export const popularTvSeriesCleaner = () => (dispatch) => {
  dispatch(action.cleanPopularTvSeries());
};

export const fetchTopRatedTvSeries = () => async (dispatch) => {
  dispatch(action.getTopRatedTvSeries());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
    );
    const data = await response.json();
    dispatch(action.getTopRatedTvSeriesSuccess(data));
  } catch (error) {
    dispatch(action.getTopRatedTvSeriesFail(error));
  }
};

export const topRatedTvSeriesCleaner = () => (dispatch) => {
  dispatch(action.cleanTopRatedTvSeries());
};

export const fetchOnTheAirTvSeries = () => async (dispatch) => {
  dispatch(action.getOnTheAirTvSeries());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
    );
    const data = await response.json();
    dispatch(action.getOnTheAirTvSeriesSuccess(data));
  } catch (error) {
    dispatch(action.getOnTheAirTvSeriesFail(error));
  }
};

export const onTheAirTvSeriesCleaner = () => (dispatch) => {
  dispatch(action.cleanOnTheAirTvSeries());
};

export const fetchSearchTvSeries = (value) => async (dispatch) => {
  dispatch(action.getSearchTvSeries());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=a78627f739e78c82e6335d377214ef74&query=${value}&language=en-US&page=1&include_adult=false`
    );
    const data = await response.json();
    dispatch(action.getSearchTvSeriesSuccess(data));
  } catch (error) {
    dispatch(action.getSearchTvSeriesFail(error));
  }
};

export const searchTvSeriesCleaner = () => (dispatch) => {
  dispatch(action.cleanSearchTvSeries());
};

export const fetchTvSerieDetailTrailer = (serieID) => async (dispatch) => {
  dispatch(action.getTvSerieDetailTrailer());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${serieID}/videos?api_key=a78627f739e78c82e6335d377214ef74&language=en-US`
    );
    const data = await response.json();
    dispatch(action.getTvSerieDetailTrailerSuccess(data));
  } catch (error) {
    dispatch(action.getTvSerieDetailTrailerFail(error));
  }
};

export const tvSerieDetailTrailerCleaner = () => (dispatch) => {
  dispatch(action.cleanTvSerieDetailTrailer());
};

export const fetchTvSerieDetailCast = (serieID) => async (dispatch) => {
  dispatch(action.getTvSerieDetailCast());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${serieID}/credits?api_key=a78627f739e78c82e6335d377214ef74&language=en-US`
    );
    const data = await response.json();
    dispatch(action.getTvSeriesDetailCastSuccess(data));
  } catch (error) {
    dispatch(action.getTvSerieDetailCastFail(error));
  }
};

export const tvSerieDetailCastCleaner = () => (dispatch) => {
  dispatch(action.cleanTvSerieDetailCast());
};
