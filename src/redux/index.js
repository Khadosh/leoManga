import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homePage from './homePage/HomePageReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  homePage
});

export default rootReducer;
