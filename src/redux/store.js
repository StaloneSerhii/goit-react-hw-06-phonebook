import { configureStore} from '@reduxjs/toolkit';
import { mySliceAddContacts } from "./userSlice";

export const store = configureStore({
  reducer: {
    contact: mySliceAddContacts.reducer,
  },
});
