import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './global-slice';

const store = configureStore({
  reducer: {
    global: globalSlice, // Add your slice reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;