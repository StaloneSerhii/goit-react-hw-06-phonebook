import { configureStore} from '@reduxjs/toolkit';
import { mySliceAddContacts } from "./userSlice";
import { mySliceFilter } from './userSlice';

export const store = configureStore({
  reducer: {
    contact: mySliceAddContacts.reducer,
    filter: mySliceFilter.reducer,
  },
});
