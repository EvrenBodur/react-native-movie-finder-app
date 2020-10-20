import * as actionTypes from "./actionTypes";

export const getPopularMovies = () => ({
  type: actionTypes.GET_POPULAR_MOVIES,
});

export const getPopularMoviesSuccess = (data) => ({
  type: actionTypes.GET_POPULAR_MOVIES_SUCCESS,
  payload: data,
});

export const getPopularMoviesFail = (error) => ({
  type: actionTypes.GET_POPULAR_MOVIES_FAIL,
  payload: error,
});

export const getTopRatedMovies = () => ({
  type: actionTypes.GET_TOP_RATED_MOVIES,
});

export const getTopRatedMoviesSuccess = (data) => ({
  type: actionTypes.GET_TOP_RATED_MOVIES_SUCCESS,
  payload: data,
});

export const getTopRatedMoviesFail = (error) => ({
  type: actionTypes.GET_TOP_RATED_MOVIES_FAIL,
  payload: error,
});

export const getUpcomingMovies = () => ({
  type: actionTypes.GET_UPCOMING_MOVIES,
});

export const getUpcomingMoviesSuccess = (data) => ({
  type: actionTypes.GET_UPCOMING_MOVIES_SUCCESS,
  payload: data,
});

export const getUpcomingMoviesFail = (error) => ({
  type: actionTypes.GET_UPCOMING_MOVIES_FAIL,
  payload: error,
});

export const getSearchMovies = () => ({
  type: actionTypes.GET_SEARCH_MOVIES,
});

export const getSearchMoviesSuccess = (data) => ({
  type: actionTypes.GET_SEARCH_MOVIES_SUCCESS,
  payload: data,
});

export const getSearchMoviesFail = (error) => ({
  type: actionTypes.GET_SEARCH_MOVIES_FAIL,
  payload: error,
});

export const cleanSearchMovies = () => ({
  type: actionTypes.CLEAN_SEARCH_MOVIES,
});

export const getCategories = () => ({
  type: actionTypes.GET_CATEGORIES,
});

export const getCategoriesSuccess = (data) => ({
  type: actionTypes.GET_CATEGORIES_SUCCESS,
  payload: data,
});

export const getCategoriesFail = (error) => ({
  type: actionTypes.GET_CATEGORIES_FAIL,
  payload: error,
});

export const getSelectedCategory = () => ({
  type: actionTypes.GET_SELECTED_CATEGORY,
});

export const getSelectedCategorySuccess = (data) => ({
  type: actionTypes.GET_SELECTED_CATEGORY_SUCCESS,
  payload: data,
});

export const getSelectedCategoryFail = (error) => ({
  type: actionTypes.GET_SELECTED_CATEGORY_FAIL,
  payload: error,
});

//------------------------------------------------------------------

export const getPopularTvSeries = () => ({
  type: actionTypes.GET_POPULAR_TV_SERIES,
});

export const getPopularTvSeriesSuccess = (data) => ({
  type: actionTypes.GET_POPULAR_TV_SERIES_SUCCESS,
  payload: data,
});

export const getPopularTvSeriesFail = (error) => ({
  type: actionTypes.GET_POPULAR_TV_SERIES_FAIL,
  payload: error,
});

export const getTopRatedTvSeries = () => ({
  type: actionTypes.GET_TOP_RATED_TV_SERIES,
});

export const getTopRatedTvSeriesSuccess = (data) => ({
  type: actionTypes.GET_TOP_RATED_TV_SERIES_SUCCESS,
  payload: data,
});

export const getTopRatedTvSeriesFail = (error) => ({
  type: actionTypes.GET_TOP_RATED_TV_SERIES_FAIL,
  payload: error,
});

export const getOnTheAirTvSeries = () => ({
  type: actionTypes.GET_ON_THE_AIR_TV_SERIES,
});

export const getOnTheAirTvSeriesSuccess = (data) => ({
  type: actionTypes.GET_ON_THE_AIR_TV_SERIES_SUCCESS,
  payload: data,
});

export const getOnTheAirTvSeriesFail = (error) => ({
  type: actionTypes.GET_ON_THE_AIR_TV_SERIES_FAIL,
  payload: error,
});

export const getSearchTvSeries = () => ({
  type: actionTypes.GET_SEARCH_TV_SERIES,
});

export const getSearchTvSeriesSuccess = (data) => ({
  type: actionTypes.GET_SEARCH_TV_SERIES_SUCCESS,
  payload: data,
});

export const getSearchTvSeriesFail = (error) => ({
  type: actionTypes.GET_SEARCH_TV_SERIES_FAIL,
  payload: error,
});

export const cleanSearchTvSeries = () => ({
  type: actionTypes.CLEAN_SEARCH_TV_SERIES,
});

export const getTvSeriesCategories = () => ({
  type: actionTypes.GET_TV_SERIES_CATEGORIES,
});

export const getTvSeriesCategoriesSuccess = (data) => ({
  type: actionTypes.GET_TV_SERIES_CATEGORIES_SUCCESS,
  payload: data,
});

export const getTvSeriesCategoriesFail = (error) => ({
  type: actionTypes.GET_TV_SERIES_CATEGORIES_FAIL,
  payload: error,
});

export const getSelectedTvSeriesCategory = () => ({
  type: actionTypes.GET_SELECTED_TV_SERIES_CATEGORY,
});

export const getSelectedTvSeriesCategorySuccess = (data) => ({
  type: actionTypes.GET_SELECTED_TV_SERIES_CATEGORY_SUCCESS,
  payload: data,
});

export const getSelectedTvSeriesCategoryFail = (error) => ({
  type: actionTypes.GET_SELECTED_TV_SERIES_CATEGORY_FAIL,
  payload: error,
});

//-----------------------------------------------------------------------
