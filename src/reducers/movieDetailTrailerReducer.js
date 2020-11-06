import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  movieDetailTrailer: [],
  isMovieDetailTrailerLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAIL_TRAILER:
      return {
        ...state,
        isMovieDetailTrailerLoading: true,
      };
    case actionTypes.GET_MOVIE_DETAIL_TRAILER_SUCCESS:
      return {
        ...state,
        movieDetailTrailer: action.payload.results,
        isMovieDetailTrailerLoading: false,
      };
    case actionTypes.GET_MOVIE_DETAIL_TRAILER_FAIL:
      return {
        ...state,
        isMovieDetailTrailerLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_MOVIE_DETAIL_TRAILER:
      return {
        ...state,
        movieDetailTrailer: [],
        isMovieDetailTrailerLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
