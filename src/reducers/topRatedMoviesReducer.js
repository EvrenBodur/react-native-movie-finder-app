import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  topRatedMovies: [],
  tMoviesTotalResults: 0,
  tMoviesTotalPages: 0,
  isTopRatedMoviesLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        isTopRatedMoviesLoading: true,
      };
    case actionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload.results,
        tMoviesTotalResults: action.payload.total_results,
        tMoviesTotalPages: action.payload.total_pages,
        isTopRatedMoviesLoading: false,
      };

    case actionTypes.GET_TOP_RATED_MOVIES_FAIL:
      return {
        ...state,
        isTopRatedMoviesLoading: false,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
