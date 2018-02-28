import { combineReducers } from 'redux';
import FilmsReducer from './FilmsReducer';
import ButtonReducer from './ButtonReducer';

const appReducer = combineReducers({
  filmsProp: FilmsReducer,
  buttonValueForSearch: ButtonReducer,
});

export default appReducer;
