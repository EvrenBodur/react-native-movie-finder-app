import * as actionTypes from "../actions/actionTypes";

const INTIIAL_STATE = {
  popularTvSeries: [],
  pTvSeriesTotalResults: 0,
  pTvSeriesTotalPages: 0,
  isPopularTvSeriesLoading: false,
  hasError: "",
};

export default (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_TV_SERIES:
      return {
        ...state,
        isPopularTvSeriesLoading: true,
      };
    case actionTypes.GET_POPULAR_TV_SERIES_SUCCESS:
      return {
        ...state,
        popularTvSeries: action.payload.results,
        pTvSeriesTotalResults: action.payload.total_results,
        pTvSeriesTotalPages: action.payload.total_pages,
        isPopularTvSeriesLoading: false,
      };
    case actionTypes.GET_POPULAR_TV_SERIES_FAIL:
      return {
        ...state,
        isPopularTvSeriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_POPULAR_TV_SERIES:
      return {
        ...state,
        popularTvSeries: [],
        pTvSeriesTotalResults: 0,
        pTvSeriesTotalPages: 0,
        isPopularTvSeriesLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
