import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = (preloadedState: Partial<RootState> = { counter: { value: 0 } }) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
