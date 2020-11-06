import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  upcomingMovies: [],
  uMoviesTotalResults: 0,
  uMoviesTotalPages: 0,
  isUpcomingMoviesLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_UPCOMING_MOVIES:
      return {
        ...state,
        isUpcomingMoviesLoading: true,
      };
    case actionTypes.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload.results,
        uMoviesTotalResults: action.payload.total_results,
        uMoviesTotalPages: action.payload.total_pages,
        isUpcomingMoviesLoading: false,
      };

    case actionTypes.GET_UPCOMING_MOVIES_FAIL:
      return {
        ...state,
        isUpcomingMoviesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: [],
        uMoviesTotalResults: 0,
        uMoviesTotalPages: 0,
        isUpcomingMoviesLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
