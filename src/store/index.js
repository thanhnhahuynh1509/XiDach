import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./card-slice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
