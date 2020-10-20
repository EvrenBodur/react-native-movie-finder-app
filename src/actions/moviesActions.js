import * as action from "./actionCreators";

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch(action.getPopularMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
    );
    const data = await response.json();
    dispatch(action.getPopularMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getPopularMoviesFail(error));
  }
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  dispatch(action.getTopRatedMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
    );
    const data = await response.json();
    dispatch(action.getTopRatedMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getTopRatedMoviesFail(error));
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  dispatch(action.getUpcomingMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
    );
    const data = await response.json();
    dispatch(action.getUpcomingMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getUpcomingMoviesFail(error));
  }
};

export const fetchSearchMovies = (value) => async (dispatch) => {
  dispatch(action.getSearchMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a78627f739e78c82e6335d377214ef74&query=${value}&language=en-US&page=1&include_adult=false`
    );
    const data = await response.json();
    dispatch(action.getSearchMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getSearchMoviesFail(error));
  }
};

export const searchMovieCleaner = () => (dispatch) => {
  dispatch(action.cleanSearchMovies());
};
