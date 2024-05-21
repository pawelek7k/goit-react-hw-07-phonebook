import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      state = [...state, action.payload];
      return state;
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
