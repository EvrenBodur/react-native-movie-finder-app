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

export const cleanPopularMovies = () => ({
  type: actionTypes.CLEAN_POPULAR_MOVIES,
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

export const cleanTopRatedMovies = () => ({
  type: actionTypes.CLEAN_TOP_RATED_MOVIES,
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

export const cleanUpcomingMovies = () => ({
  type: actionTypes.CLEAN_UPCOMING_MOVIES,
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

export const getMovieCategories = () => ({
  type: actionTypes.GET_MOVIE_CATEGORIES,
});

export const getMovieCategoriesSuccess = (data) => ({
  type: actionTypes.GET_MOVIE_CATEGORIES_SUCCESS,
  payload: data,
});

export const getMovieCategoriesFail = (error) => ({
  type: actionTypes.GET_MOVIE_CATEGORIES_FAIL,
  payload: error,
});

export const getSelectedMovieCategory = () => ({
  type: actionTypes.GET_SELECTED_MOVIE_CATEGORY,
});

export const getSelectedMovieCategorySuccess = (data) => ({
  type: actionTypes.GET_SELECTED_MOVIE_CATEGORY_SUCCESS,
  payload: data,
});

export const getSelectedMovieCategoryFail = (error) => ({
  type: actionTypes.GET_SELECTED_MOVIE_CATEGORY_FAIL,
  payload: error,
});

export const cleanSelectedMovieCategory = () => ({
  type: actionTypes.CLEAN_SELECTED_MOVIES_CATEGORY,
});

export const getMovieDetailTrailer = () => ({
  type: actionTypes.GET_MOVIE_DETAIL_TRAILER,
});

export const getMovieDetailTrailerSuccess = (data) => ({
  type: actionTypes.GET_MOVIE_DETAIL_TRAILER_SUCCESS,
  payload: data,
});

export const getMovieDetailTrailerFail = (error) => ({
  type: actionTypes.GET_MOVIE_DETAIL_TRAILER_FAIL,
  payload: error,
});

export const cleanMovieDetailTrailer = () => ({
  type: actionTypes.CLEAN_MOVIE_DETAIL_TRAILER,
});

export const getMovieDetailCast = () => ({
  type: actionTypes.GET_MOVIE_DETAIL_CAST,
});

export const getMovieDetailCastSuccess = (data) => ({
  type: actionTypes.GET_MOVIE_DETAIL_CAST_SUCCESS,
  payload: data,
});

export const getMovieDetailCastFail = (error) => ({
  type: actionTypes.GET_MOVIE_DETAIL_CAST_FAIL,
  payload: error,
});

export const cleanMovieDetailCast = () => ({
  type: actionTypes.CLEAN_MOVIE_DETAIL_CAST,
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

export const cleanPopularTvSeries = () => ({
  type: actionTypes.CLEAN_POPULAR_TV_SERIES,
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

export const cleanTopRatedTvSeries = () => ({
  type: actionTypes.CLEAN_TOP_RATED_TV_SERIES,
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

export const cleanOnTheAirTvSeries = () => ({
  type: actionTypes.CLEAN_ON_THE_AIR_TV_SERIES,
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

export const cleanSelectedTvSeriesCategory = () => ({
  type: actionTypes.CLEAN_SELECTED_TV_SERIES_CATEGORY,
});

export const getTvSerieDetailTrailer = () => ({
  type: actionTypes.GET_TV_SERIE_DETAIL_TRAILER,
});

export const getTvSerieDetailTrailerSuccess = (data) => ({
  type: actionTypes.GET_TV_SERIE_DETAIL_TRAILER_SUCCESS,
  payload: data,
});

export const getTvSerieDetailTrailerFail = (error) => ({
  type: actionTypes.GET_TV_SERIES_DETAIL_TRAILER_FAIL,
  payload: error,
});

export const cleanTvSerieDetailTrailer = () => ({
  type: actionTypes.CLEAN__TV_SERIE_DETAIL_TRAILER,
});

export const getTvSerieDetailCast = () => ({
  type: actionTypes.GET_TV_SERIE_DETAIL_CAST,
});

export const getTvSeriesDetailCastSuccess = (data) => ({
  type: actionTypes.GET_TV_SERIE_DETAIL_CAST_SUCCESS,
  payload: data,
});

export const getTvSerieDetailCastFail = (error) => ({
  type: actionTypes.GET_TV_SERIE_DETAIL_CAST_FAIL,
  payload: error,
});

export const cleanTvSerieDetailCast = () => ({
  type: actionTypes.CLEAN_TV_SERIE_DETAIL_CAST,
});

//-----------------------------------------------------------------------
