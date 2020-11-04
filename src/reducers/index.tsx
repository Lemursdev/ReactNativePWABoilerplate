import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './exampleReducer';

const reducers = [exampleReducer];

export default combineReducers(reducers);
