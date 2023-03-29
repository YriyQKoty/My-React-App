import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import createSagaMiddleware from "redux-saga";
import userSlice, {watchFetchUserData} from './userSlice';

import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './api/test';

export const fetchDataRequest = () => {
    return {
      type: 'users/fetchUsers',
    };
  };

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(sagaMiddleware),
})


sagaMiddleware.run(watchFetchUserData);

store.dispatch(fetchDataRequest())

setupListeners(store.dispatch)