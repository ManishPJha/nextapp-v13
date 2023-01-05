import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import lifeslice from "./slices/life";

const createStore = () =>
  configureStore({
    reducer: {
      [lifeslice.name]: lifeslice.reducer,
    },
    // middleware: [thunk],
  });

export const store = createStore();

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppSelector = ReturnType<typeof store.getState>;
