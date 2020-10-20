import * as action from "./actionCreators";

export const fetchCategories = () => async (dispatch) => {
  dispatch(action.getCategories());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=a78627f739e78c82e6335d377214ef74&language=en-US`
    );
    const data = await response.json();
    dispatch(action.getCategoriesSuccess(data));
  } catch (error) {
    dispatch(action.getCategoriesFail(error));
  }
};

export const fetchSelectedCategory = (selectedValue) => async (dispatch) => {
  dispatch(action.getSelectedCategory());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&include_adult=false&page=1&with_genres=${selectedValue}`
    );
    const data = await response.json();
    dispatch(action.getSelectedCategorySuccess(data));
  } catch (error) {
    dispatch(action.getSelectedCategoryFail(error));
  }
};

export const fetchTvSeriesCategories = () => async (dispatch) => {
  dispatch(action.getTvSeriesCategories());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=a78627f739e78c82e6335d377214ef74&language=en-US`
    );
    const data = await response.json();
    dispatch(action.getTvSeriesCategoriesSuccess(data));
  } catch (error) {
    dispatch(action.getTvSeriesCategoriesFail(error));
  }
};

export const fetchSelectedTvSeriesCategory = (selectedValue) => async (
  dispatch
) => {
  dispatch(action.getSelectedTvSeriesCategory());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=${selectedValue}`
    );
    const data = await response.json();
    dispatch(action.getSelectedTvSeriesCategorySuccess(data));
  } catch (error) {
    dispatch(action.getSelectedTvSeriesCategoryFail(error));
  }
};
