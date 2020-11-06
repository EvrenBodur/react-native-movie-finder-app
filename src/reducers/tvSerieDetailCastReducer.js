import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  tvSerieDetailCast: [],
  isTvSerieDetailCastLoading: false,
  hasError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TV_SERIE_DETAIL_CAST:
      return {
        ...state,
        isTvSerieDetailCastLoading: true,
      };
    case actionTypes.GET_TV_SERIE_DETAIL_CAST_SUCCESS:
      return {
        ...state,
        tvSerieDetailCast: action.payload.cast.filter(
          (item) => item.profile_path !== null
        ),
        isTvSerieDetailCastLoading: false,
      };
    case actionTypes.GET_TV_SERIE_DETAIL_CAST_FAIL:
      return {
        ...state,
        isTvSerieDetailCastLoading: false,
        hasError: action.payload,
      };
    case actionTypes.CLEAN_TV_SERIE_DETAIL_CAST:
      return {
        ...state,
        tvSerieDetailCast: [],
        isTvSerieDetailCastLoading: false,
        hasError: "",
      };
    default:
      return state;
  }
};
