import types from './types';
import { weatherByCity } from '../../controllers/transport';

export const getWeather = (city) => async (dispatch) => {
  try{
    dispatch({ type: types.GET_WEATHER_STARTING });
    const { location: weather, errorCode, message } = await weatherByCity(city);
    if (errorCode) {
     throw new Error(message);
    } else {
      dispatch({
        type: types.GET_WEATHER_SUCCESS,
        payload: { weather }
      });
    }
  } catch (error) {
    dispatch({
      type: types.GET_USER_POSITION_ERROR,
      payload: error,
    });
  }
};
