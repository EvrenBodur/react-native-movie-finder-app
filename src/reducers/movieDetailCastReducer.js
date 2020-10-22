import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  movieDetailCast: [],
  isMovieDetailCastLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAIL_CAST:
      return {
        ...state,
        isMovieDetailCastLoading: true,
      };
    case actionTypes.GET_MOVIE_DETAIL_CAST_SUCCESS:
      return {
        ...state,
        movieDetailCast: action.payload.cast.filter(
          (item) => item.profile_path !== null
        ),
        isMovieDetailCastLoading: false,
      };
    case actionTypes.GET_MOVIE_DETAIL_CAST_FAIL:
      return {
        ...state,
        isMovieDetailCastLoading: false,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
