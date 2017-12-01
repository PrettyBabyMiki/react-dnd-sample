import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import availabelFoods from './availabel_foods';



export default combineReducers({
  routing: routerReducer,
  availabelFoods
});
