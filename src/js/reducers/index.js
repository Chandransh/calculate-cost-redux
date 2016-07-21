import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import itemList from './itemList';

const rootReducer = combineReducers({
  form: formReducer,
  itemList
});

export default rootReducer;
