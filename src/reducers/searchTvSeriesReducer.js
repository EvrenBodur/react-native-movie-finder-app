import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchTvSeries: [],
  sTvSeriesTotalResults: 0,
  sTvSeriesTotalPages: 0,
  isSearchTvSeriesLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_TV_SERIES:
      return {
        ...state,
        isSearchTvSeriesLoading: true,
      };
    case actionTypes.GET_SEARCH_TV_SERIES_SUCCESS:
      return {
        ...state,
        searchTvSeries: action.payload.results,
        sTvSeriesTotalResults: action.payload.total_results,
        sTvSeriesTotalPages: action.payload.total_pages,
        isSearchTvSeriesLoading: false,
      };
    case actionTypes.GET_SEARCH_TV_SERIES_FAIL:
      return {
        ...state,
        isSearchTvSeriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_SEARCH_TV_SERIES:
      return {
        ...state,
        searchTvSeries: [],
        sTvSeriesTotalResults: 0,
        sTvSeriesTotalPages: 0,
        isSearchTvSeriesLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
