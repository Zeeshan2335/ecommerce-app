import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AddedCards: [],
};

const addToCard = createSlice({
  name: "cards",
  initialState,
  reducers: {
    handleAddCards: (state, action) => {
      const findItem = state.AddedCards.some(
        (item) => item.id === action.payload.id
      );
      if (!findItem) {
        state.AddedCards.push(action.payload);
      }
      console.log("findItem :", findItem);
    },
    handleRemoveCards: (state, action) => {
      const filtData = state.AddedCards.filter(
        (item) => item.id != action.payload
      );
      console.log("filtData :", filtData);
      state.AddedCards = filtData;
    },
  },
});

export const addToCardItems = (state) => state.addToCards.AddedCards;

export const { handleAddCards, handleRemoveCards } = addToCard.actions; // export for all component

export default addToCard.reducer; // export for binding store
