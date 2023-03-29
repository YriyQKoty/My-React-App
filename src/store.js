import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';

import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './api/test';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)