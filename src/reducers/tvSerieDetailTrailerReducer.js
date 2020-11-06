import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  tvSerieDetailTrailer: [],
  isTvSerieDetailTrailerLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TV_SERIE_DETAIL_TRAILER:
      return {
        ...state,
        isTvSerieDetailTrailerLoading: true,
      };
    case actionTypes.GET_TV_SERIE_DETAIL_TRAILER_SUCCESS:
      return {
        ...state,
        tvSerieDetailTrailer: action.payload.results,
        isTvSerieDetailTrailerLoading: false,
      };
    case actionTypes.GET_TV_SERIES_DETAIL_TRAILER_FAIL:
      return {
        ...state,
        isTvSerieDetailTrailerLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN__TV_SERIE_DETAIL_TRAILER:
      return {
        ...state,
        tvSerieDetailTrailer: [],
        isTvSerieDetailTrailerLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
