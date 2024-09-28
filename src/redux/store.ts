import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filtersPersistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
