import * as actionTypes from "../actions/actionTypes";

const INTIIAL_STATE = {
  topRatedTvSeries: [],
  tTvSeriesTotalResults: 0,
  tTvSeriesTotalPages: 0,
  isTopRatedTvSeriesLoading: false,
  hasError: "",
};

export default (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_TV_SERIES:
      return {
        ...state,
        isTopRatedTvSeriesLoading: true,
      };
    case actionTypes.GET_TOP_RATED_TV_SERIES_SUCCESS:
      return {
        ...state,
        topRatedTvSeries: action.payload.results,
        tTvSeriesTotalResults: action.payload.total_results,
        tTvSeriesTotalPages: action.payload.total_pages,
        isTopRatedTvSeriesLoading: false,
      };
    case actionTypes.GET_TOP_RATED_TV_SERIES_FAIL:
      return {
        ...state,
        isTopRatedTvSeriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_TOP_RATED_TV_SERIES:
      return {
        ...state,
        topRatedTvSeries: [],
        tTvSeriesTotalResults: 0,
        tTvSeriesTotalPages: 0,
        isTopRatedTvSeriesLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
