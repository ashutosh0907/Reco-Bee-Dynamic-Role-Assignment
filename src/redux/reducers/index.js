import {combineReducers} from '@reduxjs/toolkit';
import roleReducer from './roleReducer';

export default combineReducers({
  role: roleReducer,
});
