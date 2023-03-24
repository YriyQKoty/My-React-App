import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/reducer';

const store = configureStore({ reducer: productReducer});

export default store;