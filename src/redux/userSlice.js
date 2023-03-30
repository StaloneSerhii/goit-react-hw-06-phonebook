import { createSlice } from '@reduxjs/toolkit';

export const mySliceAddContacts = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});


export const { addContact } = mySliceAddContacts.actions;