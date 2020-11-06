import * as actionTypes from "../actions/actionTypes";

const INTIIAL_STATE = {
  onTheAirTvSeries: [],
  oTvSeriesTotalResults: 0,
  oTvSeriesTotalPages: 0,
  isOnTheAirTvSeriesLoading: false,
  hasError: "",
};

export default (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ON_THE_AIR_TV_SERIES:
      return {
        ...state,
        isOnTheAirTvSeriesLoading: true,
      };
    case actionTypes.GET_ON_THE_AIR_TV_SERIES_SUCCESS:
      return {
        ...state,
        onTheAirTvSeries: action.payload.results,
        oTvSeriesTotalResults: action.payload.total_results,
        oTvSeriesTotalPages: action.payload.total_pages,
        isOnTheAirTvSeriesLoading: false,
      };
    case actionTypes.GET_ON_THE_AIR_TV_SERIES_FAIL:
      return {
        ...state,
        isOnTheAirTvSeriesLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_ON_THE_AIR_TV_SERIES:
      return {
        ...state,
        onTheAirTvSeries: [],
        oTvSeriesTotalResults: 0,
        oTvSeriesTotalPages: 0,
        isOnTheAirTvSeriesLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
