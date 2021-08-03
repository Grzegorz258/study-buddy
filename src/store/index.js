import { v4 as uuid } from 'uuid';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const inititalNotesState = [
  {
    id: uuid(),
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet',
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: inititalNotesState,
  reducers: {
    addNote(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});
