import { combineReducers } from 'redux';
import { weather } from './weather/reducer';

export const rootReducer = combineReducers({ weather });
