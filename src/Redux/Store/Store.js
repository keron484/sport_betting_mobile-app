import { configureStore } from "@reduxjs/toolkit";
import betslipReducer from "../Slices/BetSlipslice";
import placebetReducer from "../Slices/Betslice";
import authReducer from "../Slices/Authslice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from "redux";
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }
  const rootReducer = combineReducers({ 
      betslip:betslipReducer,
      auth:authReducer,
      placebet:placebetReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);