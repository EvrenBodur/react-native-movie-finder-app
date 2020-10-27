import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularMovies: [],
  pMoviesTotalResults: 0,
  pMoviesTotalPages: 0,
  isPopularMoviesLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        isPopularMoviesLoading: true,
      };
    case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload.results,
        pMoviesTotalResults: action.payload.total_results,
        pMoviesTotalPages: action.payload.total_pages,
        isPopularMoviesLoading: false,
      };

    case actionTypes.GET_POPULAR_MOVIES_FAIL:
      return {
        ...state,
        isPopularMoviesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_MOVIES:
      return {
        ...state,
        popularMovies: [],
        pMoviesTotalResults: 0,
        pMoviesTotalPages: 0,
        isPopularMoviesLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
