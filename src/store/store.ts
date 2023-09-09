import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./api/api";

const logger = createLogger({
  collapsed: true,
});

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(logger),
});

setupListeners(store.dispatch);
