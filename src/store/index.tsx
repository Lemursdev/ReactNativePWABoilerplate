import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger] as const,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
