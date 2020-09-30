import {
  configureStore,
  getDefaultMiddleware,
  applyMiddleware,
  compose,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// const middlewares = [];

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  foo: () => 'bar',
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // ...middlewares,
  ],
  // enhancers: [compose(applyMiddleware(...middlewares))],
});

export const persistor = persistStore(store);
export default store;
