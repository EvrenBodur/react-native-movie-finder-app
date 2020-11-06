import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  tvSeriesCategories: [],
  isTvSeriesCategoriesLoading: false,
  selectedTvSeriesCategory: [],
  isSelectedTvSeriesCategoryLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TV_SERIES_CATEGORIES:
      return {
        ...state,
        isTvSeriesCategoriesLoading: true,
      };
    case actionTypes.GET_TV_SERIES_CATEGORIES_SUCCESS:
      return {
        ...state,
        tvSeriesCategories: action.payload.genres,
        isTvSeriesCategoriesLoading: false,
      };
    case actionTypes.GET_TV_SERIES_CATEGORIES_FAIL:
      return {
        ...state,
        isTvSeriesCategoriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.GET_SELECTED_TV_SERIES_CATEGORY:
      return {
        ...state,
        isSelectedTvSeriesCategoryLoading: true,
      };
    case actionTypes.GET_SELECTED_TV_SERIES_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedTvSeriesCategory: action.payload.results,
        isSelectedTvSeriesCategoryLoading: false,
      };
    case actionTypes.GET_SELECTED_TV_SERIES_CATEGORY_FAIL:
      return {
        ...state,
        isSelectedTvSeriesCategoryLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_SELECTED_TV_SERIES_CATEGORY:
      return {
        ...state,
        selectedTvSeriesCategory: [],
        isSelectedTvSeriesCategoryLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
