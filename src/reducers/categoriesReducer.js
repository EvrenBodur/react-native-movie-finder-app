import * as actionTypes from "../actions/actionTypes";

const INTIAL_STATE = {
  categories: [],
  isCategoriesLoading: false,
  selectedCategoryMovies: [],
  isSelectedCategoryMoviesLoading: false,
  hasError: "",
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        isCategoriesLoading: true,
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.genres,
        isCategoriesLoading: false,
      };
    case actionTypes.GET_CATEGORIES_FAIL:
      return {
        ...state,
        isCategoriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.GET_SELECTED_CATEGORY:
      return {
        ...state,
        isSelectedCategoryMoviesLoading: true,
      };
    case actionTypes.GET_SELECTED_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedCategoryMovies: action.payload.results,
        isSelectedCategoryMoviesLoading: false,
      };
    case actionTypes.GET_SELECTED_CATEGORY_FAIL:
      return {
        ...state,
        isSelectedCategoryMoviesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.GET_TV_SERIES_CATEGORIES:
      return {
        ...state,
        isCategoriesLoading: true,
      };
    case actionTypes.GET_TV_SERIES_CATEGORIES_SUCCESS:
      return {
        categories: action.payload.genres,
        isCategoriesLoading: false,
      };
    case actionTypes.GET_TV_SERIES_CATEGORIES_FAIL:
      return {
        ...state,
        isCategoriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.GET_SELECTED_TV_SERIES_CATEGORY:
      return {
        ...state,
        isSelectedCategoryMoviesLoading: true,
      };
    case actionTypes.GET_SELECTED_TV_SERIES_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedCategoryMovies: action.payload.results,
        isSelectedCategoryMoviesLoading: false,
      };
    case actionTypes.GET_SELECTED_TV_SERIES_CATEGORY_FAIL:
      return {
        ...state,
        isSelectedCategoryMoviesLoading: false,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
