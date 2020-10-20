import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchMovies: [],
  sMoviesTotalResults: 0,
  sMoviesTotalPages: 0,
  isSearchMoviesLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_MOVIES:
      return {
        ...state,
        isSearchMoviesLoading: true,
      };
    case actionTypes.GET_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchMovies: action.payload.results,
        sMoviesTotalResults: action.payload.total_results,
        sMoviesTotalPages: action.payload.total_pages,
        isSearchMoviesLoading: false,
      };
    case actionTypes.GET_SEARCH_MOVIES_FAIL:
      return {
        ...state,
        isSearchMoviesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: [],
        sMoviesTotalResults: 0,
        sMoviesTotalPages: 0,
        isSearchMoviesLoading: false,
      };
    default:
      return state;
  }
};
