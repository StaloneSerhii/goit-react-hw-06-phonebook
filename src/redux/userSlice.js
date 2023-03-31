import { createSlice } from '@reduxjs/toolkit';

export const mySliceAddContacts = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    onDelete(state, action) {
      console.log(action.payload);
    return state.filter(contact => contact.id !== action.payload)
    }
  },
});

export const mySliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
      filterContacts(state, action){
        console.log(action.payload);
        return (state = action.payload);
      }
  }
})
export const { filterContacts } = mySliceFilter.actions;  
export const { addContact,onDelete } = mySliceAddContacts.actions;

