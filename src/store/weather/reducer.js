import types from './types';

const initialState = {
  currentWeather: [],
  loading: true,
};

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WEATHER_STARTING:
      return { ...state, loading: true };
    case types.GET_WEATHER_SUCCESS:
      const { payload: { weather } } = action;
      return { ...state, currentWeather: weather, loading: false };
    case types.GET_USER_POSITION_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
