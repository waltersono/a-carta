import { createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import logger from "redux-logger";

import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["quiz"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
