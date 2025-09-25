import { homeApi } from "@/services/home";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { HomeSlice } from "./slices/home-slice";

export const makeStore = () => {
  const MIDDLEWARES = [homeApi.middleware];

  const REDUCERS = {
    HomeSlice: HomeSlice.reducer,
  };

  const SERVICES = {
    [homeApi.reducerPath]: homeApi.reducer,
  };

  const COMBINED_REDUCERS = combineReducers({
    ...SERVICES,
    ...REDUCERS,
  });

  return configureStore({
    reducer: COMBINED_REDUCERS,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(MIDDLEWARES),
    devTools: true,
  });
};

setupListeners(makeStore().dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
