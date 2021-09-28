import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import todoReducer from "./Reducers/todoSlice";
import storesReducer from "./Reducers/storesSlice";

const reducers = combineReducers({
  stores: storesReducer,
  todos: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
