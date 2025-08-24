import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeesReducer from "./employeesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, employeesReducer);

/**
 * Redux store configuration
 * Sets up the store with persisted employee reducer using redux-persist.
 *
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
export const store = configureStore({
  reducer: {
    employee: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

/**
 * Persistor for the Redux store
 * Enables persistence of the store state across sessions.
 *
 * @type {import('redux-persist').Persistor}
 */
export const persistor = persistStore(store);