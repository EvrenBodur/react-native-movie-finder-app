import * as actionTypes from "../actions/actionTypes";

const INTIAL_STATE = {
  movieCategories: [],
  isMovieCategoriesLoading: false,
  selectedMovieCategory: [],
  isSelectedMovieCategoryLoading: false,
  hasError: "",
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_CATEGORIES:
      return {
        ...state,
        isMovieCategoriesLoading: true,
      };
    case actionTypes.GET_MOVIE_CATEGORIES_SUCCESS:
      return {
        ...state,
        movieCategories: action.payload.genres,
        isMovieCategoriesLoading: false,
      };
    case actionTypes.GET_MOVIE_CATEGORIES_FAIL:
      return {
        ...state,
        isMovieCategoriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.GET_SELECTED_MOVIE_CATEGORY:
      return {
        ...state,
        isSelectedMovieCategoryLoading: true,
      };
    case actionTypes.GET_SELECTED_MOVIE_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedMovieCategory: action.payload.results,
        isSelectedMovieCategoryLoading: false,
      };
    case actionTypes.GET_SELECTED_MOVIE_CATEGORY_FAIL:
      return {
        ...state,
        isSelectedMovieCategoryLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_MOVIES:
      return {
        ...state,
        selectedMovieCategory: [],
        isSelectedMovieCategoryLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
