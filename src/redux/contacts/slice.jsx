import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from 'redux/operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const contactsReducer = contactSlice.reducer;
//   reducers: {
//     addContact(state, action) {
//       if (
//         state.initialContacts.find(
//           contact => contact.name === action.payload.name
//         )
//       ) {
//         alert(`${action.payload.name} is already in contacts`);
//         return;
//       }

//       state.initialContacts.push({ ...action.payload, id: nanoid() });
//     },
//     deleteContact(state, action) {
//       state.initialContacts = state.initialContacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });
