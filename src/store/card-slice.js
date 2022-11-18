import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: { data: [] },
  reducers: {
    addCard(action, state) {
      action.data = [...action.date, state.payload];
    },
  },
});

export const selectCards = (state) => state.card.data;
export const { addCard } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
